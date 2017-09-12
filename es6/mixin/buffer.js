'use strict';

function createBuffer(data) {
  const target = this.ARRAY_BUFFER_TARGET,
        buffer = this.context.createBuffer(),
        float32DataArray = new Float32Array(data),
        usage = this.STATIC_DRAW_USAGE;

  this.context.bindBuffer(target, buffer);

  this.context.bufferData(target, float32DataArray, usage);

  return buffer;
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

const bufferMixin = {
  createBuffer: createBuffer,
  bindBuffer: bindBuffer
};

module.exports = bufferMixin;
