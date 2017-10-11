'use strict';

const necessary = require('necessary');

const Shader = require('../shader'),
      vertexShaderSource = require('./source/texture/vertex'),
      fragmentShaderSource = require('./source/texture/fragment');

const { createVertexShader, createFragmentShader } = Shader,
      { textureCoordinateAttributeName } = vertexShaderSource,
      { samplerName } = fragmentShaderSource,
      { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

class TextureShader extends Shader {
  constructor(program, canvas) {
    super(program, canvas);

    this.samplerUniformLocation = canvas.getUniformLocation(program, samplerName);

    this.textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName);

    this.textureCoordinateData = [];
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
          textureShader = new TextureShader(program, canvas);

    return textureShader;
  }
}

module.exports = TextureShader;
