'use strict';

function createShader(type, shaderSource) {
  const { COMPILE_STATUS } = this.context,
        pname = COMPILE_STATUS,
        shader = this.context.createShader(type);

  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  const compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}

function createVertexShader(vertexShaderSource) {
  const { VERTEX_SHADER } = this.context,
        type = VERTEX_SHADER,
        vertexShader = this.createShader(type, vertexShaderSource);

  return vertexShader;
}

function createFragmentShader(fragmentShaderSource) {
  const { FRAGMENT_SHADER } = this.context,
        type = FRAGMENT_SHADER,
        vertexShader = this.createShader(type, fragmentShaderSource);

  return vertexShader;
}

function createShaderProgram(vertexShaderSource, fragmentShaderSource) {
  const { LINK_STATUS } = this.context,
        pname = LINK_STATUS,
        shaderProgram = this.context.createProgram(),
        vertexShader = this.createVertexShader(vertexShaderSource),
        fragmentShader = this.createFragmentShader(fragmentShaderSource);

  this.context.attachShader(shaderProgram, vertexShader);
  this.context.attachShader(shaderProgram, fragmentShader);

  this.context.linkProgram(shaderProgram);

  const linkStatus = this.context.getProgramParameter(shaderProgram, pname);

  if (!linkStatus) {
    const message = this.context.getProgramInfoLog(shaderProgram);  ///

    throw new Error(`Unable to create the shader program, '${message}'.`);
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
