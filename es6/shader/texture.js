'use strict';

const necessary = require('necessary');

const Shader = require('../shader'),
      UniformLocations = require('./locations/uniform'),
      AttributeLocations = require('./locations/attribute'),
      vertexShaderSource = require('./source/texture/vertex'),
      fragmentShaderSource = require('./source/texture/fragment');

const { createVertexShader, createFragmentShader } = Shader,
      { textureCoordinateAttributeName } = vertexShaderSource,
      { samplerName } = fragmentShaderSource,
      { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

class TextureShader extends Shader {
  constructor(program, uniformLocations, attributeLocations, samplerUniformLocation, textureCoordinateAttributeLocation, textureCoordinateData) {
    super(program, uniformLocations, attributeLocations);

    this.samplerUniformLocation = samplerUniformLocation;
    this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    this.textureCoordinateData = textureCoordinateData;
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
    const textureCoordinateComponents = 2;

    canvas.bindBuffer(this.textureCoordinateBuffer, this.textureCoordinateAttributeLocation, textureCoordinateComponents);
  }

  createTexture(image, canvas) {
    canvas.createTexture(image);
  }

  activateTexture(canvas) {
    const context = canvas.getContext(),
          { TEXTURE0 } = context,
          target = TEXTURE0,  ///
          uSamplerUniformLocationIntegerValue = 0;

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(this.samplerUniformLocation, uSamplerUniformLocationIntegerValue);
  }

  static fromNothing(canvas) {
    const vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          program = canvas.createProgram(vertexShader, fragmentShader),
          uniformLocations = UniformLocations.fromProgram(program, canvas),
          attributeLocations = AttributeLocations.fromProgram(program, canvas),
          samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureCoordinateData = [],
          textureShader = new TextureShader(program, uniformLocations, attributeLocations, samplerUniformLocation, textureCoordinateAttributeLocation, textureCoordinateData);

    return textureShader;
  }
}

module.exports = TextureShader;
