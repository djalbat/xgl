'use strict';

const Element = require('../element'),
      ColourRenderer = require('../renderer/colour'),
      TextureRenderer = require('../renderer/texture');

class Part extends Element {
  constructor(canvas, colourRenderer, textureRenderer) {
    super(canvas);

    this.colourRenderer = colourRenderer;
    this.textureRenderer = textureRenderer;
  }
  
  getColourRenderer() {
    return this.colourRenderer;
  }
  
  getTextureRenderer() {
    return this.textureRenderer;
  }

  getChildElements() {
    return this.childElements;
  }

  render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const canvas = this.getCanvas(),
          colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

    canvas.useProgram(colourRendererProgram);

    this.colourRenderer.bindBuffers(canvas);

    canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

    canvas.useProgram(textureRendererProgram);
    
    this.textureRenderer.bindBuffers(canvas);
    
    this.textureRenderer.activateTexture(canvas);
    
    canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }
  
  initialise() {
    const canvas = this.getCanvas(),
          transforms = [],
          masked = false;

    this.childElements.forEach(function(childElement) {
      childElement.initialise(this.colourRenderer, this.textureRenderer, transforms, masked);
    }.bind(this));

    this.colourRenderer.createBuffers(canvas);

    this.textureRenderer.createBuffers(canvas);
  }

  static fromProperties(properties) {
    const { imageMap, imageJSON, canvas } = properties,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromImageMapAndImageJSON(imageMap, imageJSON, canvas),
          part = Element.fromProperties(Part, properties, colourRenderer, textureRenderer);
    
    return part;
  }
}

module.exports = Part;
