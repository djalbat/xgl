'use strict';

const constants = require('../../bin/constants'), ///
      imageUtilities = require('../utilities/image');

const { IMAGE_MAP_PATH } = constants,
      { preloadImage } = imageUtilities,
      { imageMapJSON } = runtimeConfiguration;

function preloadImageMap(callback) {
  const path = IMAGE_MAP_PATH;

  preloadImage(path, callback);
}

function textureCoordinatesFromImageNames(imageNames) {
  const textureCoordinates = imageNames.reduce(function(textureCoordinates, textureName) {
          textureCoordinates = textureCoordinates.concat(imageMapJSON[textureName]);

          return textureCoordinates;
        }, []);

  return textureCoordinates;
}

module.exports = {
  preloadImageMap: preloadImageMap,
  textureCoordinatesFromImageNames: textureCoordinatesFromImageNames
};
