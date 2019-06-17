'use strict';

const Element = require('../element'),
      ColourRenderer = require('../renderer/colour'),
      ImagesTextureRenderer = require('../renderer/texture/images'),
      ImageMapTextureRenderer = require('../renderer/texture/imageMap');

class Part extends Element {
  constructor(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
    super();

    this.images = images;
    this.imageMap = imageMap;
    this.imageNames = imageNames;
    this.imageTiling = imageTiling;
    this.imageMapJSON = imageMapJSON;
    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;

    this.hidden = hidden;
  }
  
  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.colourRenderer && this.colourRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);  ///

    this.textureRenderer && this.textureRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);  ///
  }

  initialise(canvas) {
    let textureRenderer = null;

    const colourRenderer = ColourRenderer.fromNothing(canvas);

    if (this.images) {
      const imagesTextureRenderer = ImagesTextureRenderer.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);

      textureRenderer = imagesTextureRenderer;  ///
    }

    if (this.imageMap) {
      const imageMapTextureRenderer = ImageMapTextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);

      textureRenderer = imageMapTextureRenderer;  ///
    }

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.createFacets(this.hidden));

    childElements.forEach((childElement) => childElement.amendFacets());

    childElements.forEach((childElement) => childElement.addFacets(colourRenderer, textureRenderer));

    colourRenderer && colourRenderer.createBuffers(canvas); ///

    textureRenderer && textureRenderer.createBuffers(canvas); ///

    this.colourRenderer = colourRenderer;

    this.textureRenderer = textureRenderer;
  }

  static fromProperties(properties) {
    const { images = null, imageMap = null, imageNames = null, imageTiling = false, imageMapJSON = null, hidden = false } = properties,
          colourRenderer = null,  ///
          textureRenderer = null, ///
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);

    return part;
  }
}

module.exports = Part;
