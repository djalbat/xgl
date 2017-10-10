'use strict';

const constants = require('../../bin/constants'), ///
      arrayUtilities = require('../utilities/array'),
      imageUtilities = require('../utilities/image');

const { IMAGE_MAP_PATH } = constants,
      { flatten } = arrayUtilities,
      { preloadImage } = imageUtilities,
      { imageMapJSON } = runtimeConfiguration;

function preloadImageMap(callback) {
  const path = IMAGE_MAP_PATH;

  preloadImage(path, callback);
}

function textureCoordinateDataFromImageNames(imageNames) {
  const textureCoordinates = imageNames.reduce(function(textureCoordinates, textureName) {
          textureCoordinates = textureCoordinates.concat(imageMapJSON[textureName]);

          return textureCoordinates;
        }, []),
        textureCoordinateData = flatten(textureCoordinates);

  return textureCoordinateData;
}

module.exports = {
  preloadImageMap: preloadImageMap,
  textureCoordinateDataFromImageNames: textureCoordinateDataFromImageNames
};
