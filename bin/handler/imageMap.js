"use strict";

const { imageMapPNG } = require("xgl-server");

const { OVERLAY_IMAGE_SIZE, IMAGE_DIRECTORY_PATH } = require("../constants");

function imageMapHandler(request, response) {
  const names = [],
        overlayImageSize = OVERLAY_IMAGE_SIZE,  ///
        imageDirectoryPath = IMAGE_DIRECTORY_PATH;  ///

  imageMapPNG(names, imageDirectoryPath, overlayImageSize, response);
}

module.exports = imageMapHandler;
