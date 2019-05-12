'use strict';

const Element = require('../element'),
      ColourRenderer = require('../renderer/colour'),
      TextureRenderer = require('../renderer/texture');

class Part extends Element {
  constructor(imageMap, imageJSON, colourRenderer, textureRenderer) {
    super();

    this.imageMap = imageMap;
    this.imageJSON = imageJSON;
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
          masking = false,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromImageMapAndImageJSON(this.imageMap, this.imageJSON, canvas);

    this.childElements.forEach((childElement) => childElement.initialise(colourRenderer, textureRenderer, transforms, masking));

    colourRenderer.createBuffers(canvas);

    textureRenderer.createBuffers(canvas);

    this.colourRenderer = colourRenderer;

    this.textureRenderer = textureRenderer;
  }

  static fromProperties(properties) {
    const { imageMap, imageJSON } = properties,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, imageMap, imageJSON, colourRenderer, textureRenderer);

    return part;
  }
}

module.exports = Part;
