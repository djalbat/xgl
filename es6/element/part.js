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
    this.colourRenderer && this.colourRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);  ///

    this.textureRenderer && this.textureRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);  ///
  }

  createBuffers(canvas) {
    this.colourRenderer && this.colourRenderer.createBuffers(canvas); ///

    this.textureRenderer && this.textureRenderer.createBuffers(canvas); ///
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

    this.colourRenderer = colourRenderer;

    this.textureRenderer = textureRenderer;

    this.createBuffers(canvas);
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
