'use strict';

const Element = require('../element'),
      ColourRenderer = require('../renderer/colour'),
      TextureRenderer = require('../renderer/texture');

class Part extends Element {
  constructor(imageMap, imageMapJSON, colourRenderer, textureRenderer) {
    super();

    this.imageMap = imageMap;
    this.imageMapJSON = imageMapJSON;
    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;
  }
  
  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

    canvas.useProgram(colourRendererProgram);

    this.colourRenderer.bindBuffers(canvas);

    canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

    canvas.useProgram(textureRendererProgram);
    
    this.textureRenderer.bindBuffers(canvas);
    
    this.textureRenderer.activateTexture(canvas);
    
    canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }
  
  initialise(canvas) {
    const transforms = [],
          childElements = this.getChildElements(),
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);

    childElements.forEach((childElement) => childElement.applyTransforms(transforms));

    childElements.forEach((childElement) => childElement.applyMask());

    childElements.forEach((childElement) => childElement.render(colourRenderer, textureRenderer));

    colourRenderer.createBuffers(canvas);

    textureRenderer.createBuffers(canvas);

    this.colourRenderer = colourRenderer;

    this.textureRenderer = textureRenderer;
  }

  static fromProperties(properties) {
    const { imageMap, imageMapJSON } = properties,
          colourRenderer = null,  ///
          textureRenderer = null, ///
          part = Element.fromProperties(Part, properties, imageMap, imageMapJSON, colourRenderer, textureRenderer);

    return part;
  }
}

module.exports = Part;
