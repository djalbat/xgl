'use strict';

const constants = require('../../bin/constants'), ///
      imageUtilities = require('../utilities/image');

const { IMAGE_MAP_PATH } = constants,
      { preloadImage } = imageUtilities;

function preloadImageMap(callback) {
  const path = IMAGE_MAP_PATH;

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
