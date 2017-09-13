'use strict';

function createTexture(image) {
  const { TEXTURE_2D, RGBA, UNSIGNED_BYTE, TEXTURE_WRAP_S, TEXTURE_WRAP_T, CLAMP_TO_EDGE, TEXTURE_MIN_FILTER, LINEAR } = this.context,
        target = TEXTURE_2D,
        internalFormat = RGBA,
        format = RGBA,
        type = UNSIGNED_BYTE,
        texture = this.context.createTexture(),
        level = 0;

  this.context.bindTexture(target, texture);

  this.context.texImage2D(target, level, internalFormat, format, type, image);

  this.context.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
  this.context.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  this.context.texParameteri(target, TEXTURE_MIN_FILTER, LINEAR);
}

function activateTexture(target) { this.context.activeTexture(target); }

const textureMixin = {
  createTexture: createTexture,
  activateTexture: activateTexture
};

module.exports = textureMixin;
