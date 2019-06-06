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
    const colourRendererProgram = this.colourRenderer.getProgram();

    canvas.useProgram(colourRendererProgram);

    this.colourRenderer.bindBuffers(canvas);

    canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

    const count = this.colourRenderer.getCount(),
          start = 0,
          finish = count; ///

    canvas.drawElements(start, finish);

    if (this.textureRenderer !== null) {
      const textureRendererProgram = this.textureRenderer.getProgram();

      canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(canvas);

      canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      const textureOffsets = this.textureRenderer.getTextureOffsets();

      let start,
          finish = 0;  ///

      textureOffsets.forEach((textureOffset, index) => {
        start = finish; ///

        finish += textureOffset;  ///

        this.textureRenderer.useTexture(index, canvas);

        canvas.drawElements(start, finish);
      });
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
