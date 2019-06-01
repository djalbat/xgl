'use strict';

function createTexture(image) {
	const { RGBA, LINEAR, UNSIGNED_BYTE, TEXTURE_2D, TEXTURE_MIN_FILTER } = this.context,
				target = TEXTURE_2D,
				level = 0,
				internalFormat = RGBA,
				format = RGBA,
				type = UNSIGNED_BYTE,
				pname = TEXTURE_MIN_FILTER,
				param = LINEAR,
				texture = this.context.createTexture();

	this.context.bindTexture(target, texture);

  const extension = (
    this.context.getExtension('EXT_texture_filter_anisotropic') ||
    this.context.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
    this.context.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
  );

  if (extension) {
    const maximum = this.context.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);

    this.context.texParameterf(this.context.TEXTURE_2D, extension.TEXTURE_MAX_ANISOTROPY_EXT, maximum);
  }

  this.context.texImage2D(target, level, internalFormat, format, type, image);

	this.context.texParameteri(target, pname, param);
}

function activateTexture(target) { this.context.activeTexture(target); }

module.exports = {
  createTexture,
  activateTexture
};
