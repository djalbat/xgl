'use strict';

function createTexture(image) {
  const texture = this.context.createTexture(),
        target = this.TEXTURE_2D_TARGET,
        level = 0,
        internalFormat = this.RGBA_FORMAT,
        format = this.RGBA_FORMAT,
        type = this.UNSIGNED_BYTE_TYPE;

  this.context.bindTexture(target, texture);

  this.context.texImage2D(target, level, internalFormat, format, type, image);

  this.context.texParameteri(target, this.TEXTURE_WRAP_S_PNAME, this.CLAMP_TO_EDGE_PARAM);
  this.context.texParameteri(target, this.TEXTURE_WRAP_T_PNAME, this.CLAMP_TO_EDGE_PARAM);
  this.context.texParameteri(target, this.TEXTURE_MIN_FILTER_PNAME, this.LINEAR_PARAM);
}

function activateTexture(target) { this.context.activeTexture(target); }

const textureMixin = {
  createTexture: createTexture,
  activateTexture: activateTexture
};

module.exports = textureMixin;
