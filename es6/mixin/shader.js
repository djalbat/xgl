'use strict';

function createShader(Class, vertexShader, fragmentShader) {
  const program = this.context.createProgram();

  this.context.attachShader(program, vertexShader);
  this.context.attachShader(program, fragmentShader);
  this.context.linkProgram(program);

  const shader = new Class(program, this);  ///

  return shader;
}

function useShader(shader) {
  const shaderProgram = shader.getProgram();

  this.context.useProgram(shaderProgram);
}


module.exports = {
  createShader: createShader,
  useShader: useShader
};
