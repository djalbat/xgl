'use strict';

function createBuffer(data) {
  const target = this.ARRAY_BUFFER_TARGET,
        buffer = this.context.createBuffer(),
        float32Array = new Float32Array(data),
        usage = this.STATIC_DRAW_USAGE;

  this.context.bindBuffer(target, buffer);

  this.context.bufferData(target, float32Array, usage);

  return buffer;
}

function createElementBuffer(data) {
  const target = this.ELEMENT_ARRAY_BUFFER_TARGET,
        elementBuffer = this.context.createBuffer(),
        uint16Array = new Uint16Array(data),
        usage = this.STATIC_DRAW_USAGE;

  this.context.bindBuffer(target, elementBuffer);

  this.context.bufferData(target, uint16Array, usage);

  return elementBuffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  const target = this.ARRAY_BUFFER_TARGET,
        type = this.FLOAT_TYPE,
        normalize = false,
        stride = 0,
        offset = 0;

  this.context.bindBuffer(target, buffer);

  this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);
  
  this.context.enableVertexAttribArray(attributeLocation);
}

function bindElementBuffer(elementBuffer) {
  const target = this.ELEMENT_ARRAY_BUFFER_TARGET;

  this.context.bindBuffer(target, elementBuffer);
}

const bufferMixin = {
  createBuffer: createBuffer,
  createElementBuffer: createElementBuffer,
  bindBuffer: bindBuffer,
  bindElementBuffer: bindElementBuffer
};

module.exports = bufferMixin;
