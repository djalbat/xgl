'use strict';

function createProgram(vertexShader, fragmentShader) {
  const program = this.context.createProgram();

  this.context.attachShader(program, vertexShader);
  this.context.attachShader(program, fragmentShader);
  
  this.context.linkProgram(program);
  
  return program;
}

function useProgram(program) {
  this.context.useProgram(program);
}

module.exports = {
  createProgram: createProgram,
  useProgram: useProgram
};
