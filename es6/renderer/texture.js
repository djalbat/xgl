'use strict';

const necessary = require('necessary');

const Renderer = require('../renderer'),
      vertexShaderSource = require('./source/texture/vertexShader'),
      fragmentShaderSource = require('./source/texture/fragmentShader'),
      TextureUniformLocations = require('./locations/texture/uniform'),
      TextureAttributeLocations = require('./locations/texture/attribute');

const { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

class TextureRenderer extends Renderer {
  constructor(program, uniformLocations, attributeLocations, textureCoordinateData) {
    super(program, uniformLocations, attributeLocations);

    this.textureCoordinateData = textureCoordinateData;
  }

  getTextureCoordinateAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

    return textureCoordinateAttributeLocation;
  }

  addTextureCoordinateData(textureCoordinateData) {
    add(this.textureCoordinateData, textureCoordinateData);
  }

  createBuffers(canvas) {
    this.createTextureCoordinateBuffer(canvas);

    super.createBuffers(canvas);
  }

  createTextureCoordinateBuffer(canvas) {
    this.textureCoordinateBuffer = canvas.createBuffer(this.textureCoordinateData);
  }

  bindBuffers(canvas) {
    this.bindTextureCoordinateBuffer(canvas);

    super.bindBuffers(canvas);
  }

  bindTextureCoordinateBuffer(canvas) {
    const textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation(),
          textureCoordinateComponents = 2;

    canvas.bindBuffer(this.textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
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
    const vertexShader = canvas.createVertexShader(vertexShaderSource),
          fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
          program = canvas.createProgram(vertexShader, fragmentShader),
          uniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          attributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          textureCoordinateData = [],
          textureRenderer = new TextureRenderer(program, uniformLocations, attributeLocations, textureCoordinateData);

    return textureRenderer;
  }
}

module.exports = TextureRenderer;
