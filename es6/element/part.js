'use strict';

const Element = require('../element'),
      ColourRenderer = require('../renderer/colour'),
      TextureRenderer = require('../renderer/texture');

class Part extends Element {
  constructor(images, imageMap, imageNames, imageMapJSON, colourRenderer, textureRenderer) {
    super();

    this.images = images;
    this.imageMap = imageMap;
    this.imageNames = imageNames;
    this.imageMapJSON = imageMapJSON;
    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;
  }
  
  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.colourRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

    if (this.textureRenderer !== null) {
      this.textureRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }
  
  initialise(canvas) {
    const childElements = this.getChildElements(),
          colourRenderer = ColourRenderer.fromNothing(canvas);

    let textureRenderer = null;

    if (this.images) {
      textureRenderer = TextureRenderer.fromImagesAndImageNames(this.images, this.imageNames, canvas);
    }

    if (this.imageMap) {
      textureRenderer = TextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
    }

    childElements.forEach((childElement) => childElement.applyTransformsAndMasks());

    childElements.forEach((childElement) => childElement.render(colourRenderer, textureRenderer));

    colourRenderer.createBuffers(canvas);

    if (textureRenderer !== null) {
      textureRenderer.createBuffers(canvas);
    }

    this.colourRenderer = colourRenderer;

    this.textureRenderer = textureRenderer;
  }

  static fromProperties(properties) {
    const { images, imageMap, imageNames, imageMapJSON } = properties,
          colourRenderer = null,  ///
          textureRenderer = null, ///
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageMapJSON, colourRenderer, textureRenderer);

    return part;
  }
}

module.exports = Part;
