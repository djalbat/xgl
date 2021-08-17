"use strict";

import { EXT_TEXTURE_FILTER_ANISOTROPIC,
         MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC,
         WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC } from "../constants";

function createTexture(image, index, repeat) {
	const { RGBA, LINEAR, UNSIGNED_BYTE, TEXTURE0, TEXTURE_2D, TEXTURE_WRAP_S, TEXTURE_WRAP_T, UNPACK_FLIP_Y_WEBGL, CLAMP_TO_EDGE, NEAREST, REPEAT, TEXTURE_MIN_FILTER } = this.context,
				target = TEXTURE0 + index,
				level = 0,
				internalFormat = RGBA,
				format = RGBA,
				type = UNSIGNED_BYTE,
				texture = this.context.createTexture();

  this.context.activeTexture(target);

  this.context.bindTexture(TEXTURE_2D, texture);

  this.context.pixelStorei(UNPACK_FLIP_Y_WEBGL, true);

  this.context.texImage2D(TEXTURE_2D, level, internalFormat, format, type, image);

  if (repeat) {
    this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, REPEAT);
    this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, REPEAT);
  } else {
    this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  }

	this.context.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR);

	return texture;
}

function enableAnisotropicFiltering() {
  const extension = (
    this.context.getExtension(EXT_TEXTURE_FILTER_ANISOTROPIC) ||
    this.context.getExtension(MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC) ||
    this.context.getExtension(WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC)
  );

  if (extension) {
    const { TEXTURE_2D } = this.context,
          { MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY_EXT } = extension,
          maximum = this.context.getParameter(MAX_TEXTURE_MAX_ANISOTROPY_EXT);

    this.context.texParameterf(TEXTURE_2D, TEXTURE_MAX_ANISOTROPY_EXT, maximum);
  }
}

const textureMixins = {
  createTexture,
  enableAnisotropicFiltering
};

export default textureMixins;
