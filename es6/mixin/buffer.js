'use strict';

function createBuffer(data) {
  const { ARRAY_BUFFER, STATIC_DRAW } = this.context,
        target = ARRAY_BUFFER,
        usage = STATIC_DRAW,
        buffer = this.context.createBuffer(),
        float32Array = new Float32Array(data);

  this.context.bindBuffer(target, buffer);

  this.context.bufferData(target, float32Array, usage);

  return buffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  const { ARRAY_BUFFER, FLOAT } = this.context,
        target = ARRAY_BUFFER,
        type = FLOAT,
        normalize = false,
        stride = 0,
        offset = 0;

  this.context.bindBuffer(target, buffer);

  this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);

  this.context.enableVertexAttribArray(attributeLocation);
}

function createElementBuffer(data) {
  const { ELEMENT_ARRAY_BUFFER, STATIC_DRAW } = this.context,
        target = ELEMENT_ARRAY_BUFFER,
        usage = STATIC_DRAW,
        elementBuffer = this.context.createBuffer(),
        uint16Array = new Uint16Array(data);

  this.context.bindBuffer(target, elementBuffer);

  this.context.bufferData(target, uint16Array, usage);

  return elementBuffer;
}

function bindElementBuffer(elementBuffer) {
  const { ELEMENT_ARRAY_BUFFER } = this.context,
        target = ELEMENT_ARRAY_BUFFER;

  this.context.bindBuffer(target, elementBuffer);
}

const bufferMixin = {
  createBuffer: createBuffer,
  bindBuffer: bindBuffer,
  createElementBuffer: createElementBuffer,
  bindElementBuffer: bindElementBuffer
};

module.exports = bufferMixin;
