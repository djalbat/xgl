'use strict';

const Renderer = require('../renderer'),
      RendererBuffers = require('../rendererBuffers'),
      TextureRendererData = require('../rendererData/texture'),
      vertexShaderSource = require('./source/texture/vertexShader'),
      fragmentShaderSource = require('./source/texture/fragmentShader'),
      TextureUniformLocations = require('./locations/texture/uniform'),
      TextureAttributeLocations = require('./locations/texture/attribute');

const { createProgram } = Renderer;

class TextureRenderer extends Renderer {
  constructor(program, uniformLocations, attributeLocations, rendererData, rendererBuffers) {
    super(program, uniformLocations, attributeLocations, rendererData, rendererBuffers);

    this.textureCoordinatesBuffer = null;  ///
  }

  getTextureCoordinateAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

    return textureCoordinateAttributeLocation;
  }

  addTextureCoordinates(textureCoordinates) { this.rendererData.addTextureCoordinates(textureCoordinates); }

  createBuffers(canvas) {
    const textureCoordinatesData = this.rendererData.getTextureCoordinatesData();

    this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);

    super.createBuffers(canvas);
  }

  bindBuffers(canvas) {
    const textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation(),
          textureCoordinateComponents = 2;

    canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);

    super.bindBuffers(canvas);
  }

  createTexture(image, canvas) {
    canvas.createTexture(image);
  }

  activateTexture(canvas) {
    const context = canvas.getContext(),
          { TEXTURE0 } = context,
          target = TEXTURE0,  ///
          uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          uSamplerUniformLocationIntegerValue = 0;

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(samplerUniformLocation, uSamplerUniformLocationIntegerValue);
  }

  static fromNothing(canvas) {
    const program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          uniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          attributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          rendererData = textureRendererData,  ///
          rendererBuffers = RendererBuffers.fromNothing(),
          textureRenderer = new TextureRenderer(program, uniformLocations, attributeLocations, rendererData, rendererBuffers);

    return textureRenderer;
  }
}

module.exports = TextureRenderer;
