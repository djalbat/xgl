"use strict";

function getUniformLocation(program, name) {
  return this.context.getUniformLocation(program, name);
}

function getAttributeLocation(program, name) {
  return this.context.getAttribLocation(program, name);
}

function setUniformLocationIntegerValue(uniformLocation, integerValue) {
  this.context.uniform1i(uniformLocation, integerValue);
}

const locationMixins = {
  getUniformLocation,
  getAttributeLocation,
  setUniformLocationIntegerValue
};

export default locationMixins;
