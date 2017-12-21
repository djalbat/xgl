'use strict';

function createTexture(image) {
  const { RGBA, UNSIGNED_BYTE, TEXTURE_2D } = this.context,
        target = TEXTURE_2D,
        level = 0,
        internalFormat = RGBA,
        format = RGBA,
        type = UNSIGNED_BYTE,
        texture = this.context.createTexture();

  this.context.bindTexture(target, texture);

  this.context.texImage2D(target, level, internalFormat, format, type, image);

  this.context.generateMipmap(target);
}

function activateTexture(target) { this.context.activeTexture(target); }

module.exports = {
  createTexture: createTexture,
  activateTexture: activateTexture
};
