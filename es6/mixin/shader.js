'use strict';

function createShader(type, shaderSource) {
  const shader = this.context.createShader(type),
        pname = this.COMPILE_STATUS_PNAME;

  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  const compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}

function createVertexShader(vertexShaderSource) {
  const type = this.VERTEX_SHADER_TYPE,
        vertexShader = this.createShader(type, vertexShaderSource);

  return vertexShader;
}

function createFragmentShader(fragmentShaderSource) {
  const type = this.FRAGMENT_SHADER_TYPE,
        vertexShader = this.createShader(type, fragmentShaderSource);

  return vertexShader;
}

function createShaderProgram(vertexShaderSource, fragmentShaderSource) {
  const shaderProgram = this.context.createProgram(),
        vertexShader = this.createVertexShader(vertexShaderSource),
        fragmentShader = this.createFragmentShader(fragmentShaderSource),
        pname = this.LINK_STATUS_PNAME;

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
