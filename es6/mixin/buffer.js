'use strict';

function createBuffer(data) {
  const ARRAY_BUFFER_TYPE = this.context.ARRAY_BUFFER, ///
        STATIC_DRAW = this.context.STATIC_DRAW,
        buffer = this.context.createBuffer(),
        float32DataArray = new Float32Array(data);

  this.context.bindBuffer(ARRAY_BUFFER_TYPE, buffer);

  this.context.bufferData(ARRAY_BUFFER_TYPE, float32DataArray, STATIC_DRAW);

  return buffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  const type = this.context.FLOAT,
        normalize = false,
        stride = 0,
        offset = 0;

  this.context.bindBuffer(this.context.ARRAY_BUFFER, buffer);

  this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);
  
  this.context.enableVertexAttribArray(attributeLocation);
}

const bufferMixin = {
  createBuffer: createBuffer,
  bindBuffer: bindBuffer
};

module.exports = bufferMixin;
