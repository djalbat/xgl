"use strict";

export function createProgram(vertexShader, fragmentShader) {
  const program = this.context.createProgram();

  this.context.attachShader(program, vertexShader);

  this.context.attachShader(program, fragmentShader);
  
  this.context.linkProgram(program);
  
  return program;
}

export function useProgram(program) {
  this.context.useProgram(program);
}
