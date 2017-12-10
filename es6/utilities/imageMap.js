'use strict';

const constants = require('../../bin/constants');

const { IMAGE_MAP_URL_PATH } = constants;

function preloadImageMap(callback) {
  const path = IMAGE_MAP_URL_PATH;

  preloadImage(path, callback);
}

function getImageDetails(imageName) {
  const { imageMapJSON } = runtimeConfiguration,
        imageDetails = imageMapJSON[imageName];

  return imageDetails;
}

module.exports = {
  preloadImageMap: preloadImageMap,
  getImageDetails: getImageDetails
};

function preloadImage(path, callback) {
  const image = new Image();

  image.onload = function() {
    callback(image);
  };

  image.src = path;  ///
}
