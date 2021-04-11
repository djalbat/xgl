"use strict";

export function getUniformLocation(program, name) {
  return this.context.getUniformLocation(program, name);
}

export function getAttributeLocation(program, name) {
  return this.context.getAttribLocation(program, name);
}

export function setUniformLocationIntegerValue(uniformLocation, integerValue) {
  this.context.uniform1i(uniformLocation, integerValue);
}
