'use strict';

function createTexture(image) {
  const { TEXTURE_2D, RGBA, UNSIGNED_BYTE } = this.context,
        level = 0,
        internalFormat = RGBA,
        format = RGBA,
        type = UNSIGNED_BYTE,
        texture = this.context.createTexture();

  this.context.bindTexture(TEXTURE_2D, texture);

  this.context.texImage2D(TEXTURE_2D, level, internalFormat, format, type, image);

  this.context.generateMipmap(TEXTURE_2D);
}

function activateTexture(target) { this.context.activeTexture(target); }

module.exports = {
  createTexture: createTexture,
  activateTexture: activateTexture
};
