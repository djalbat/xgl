'use strict';

function createShader(type, shaderSource) {
  const shader = this.context.createShader(type);

  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  const compileStatus = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS);

  if (!compileStatus) {
    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}

function createVertexShader(vertexShaderSource) {
  const VERTEX_SHADER_TYPE = this.context.VERTEX_SHADER,  ///
        vertexShader = this.createShader(VERTEX_SHADER_TYPE, vertexShaderSource);

  return vertexShader;
}

function createFragmentShader(fragmentShaderSource) {
  const FRAGMENT_SHADER_TYPE = this.context.FRAGMENT_SHADER,  ///
        vertexShader = this.createShader(FRAGMENT_SHADER_TYPE, fragmentShaderSource);

  return vertexShader;
}

function createShaderProgram(vertexShaderSource, fragmentShaderSource) {
  const shaderProgram = this.context.createProgram(),
        vertexShader = this.createVertexShader(vertexShaderSource),
        fragmentShader = this.createFragmentShader(fragmentShaderSource);

  this.context.attachShader(shaderProgram, vertexShader);
  this.context.attachShader(shaderProgram, fragmentShader);

  this.context.linkProgram(shaderProgram);

  const linkStatus = this.context.getProgramParameter(shaderProgram, this.context.LINK_STATUS);

  if (!linkStatus) {
    const message = this.context.getProgramInfoLog(shaderProgram);  ///

    throw new Error(`Unable to create the shader program, '${message}'`);
  }

  return shaderProgram;
}

const shaderMixin = {
  createShader: createShader,
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader,
  createShaderProgram: createShaderProgram
};

module.exports = shaderMixin;
