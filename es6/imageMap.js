'use strict';

const arrayUtilities = require('./utilities/array');

const { flatten } = arrayUtilities,
      { imageMapJSON } = runtimeConfiguration;

function textureCoordinateDataFromImageNames(imageNames) {
  const textureCoordinates = imageNames.reduce(function(textureCoordinates, textureName) {
          textureCoordinates = textureCoordinates.concat(imageMapJSON[textureName]);

          return textureCoordinates;
        }, []),
        textureCoordinateData = flatten(textureCoordinates);
  
  return textureCoordinateData;
}

module.exports = {
  textureCoordinateDataFromImageNames: textureCoordinateDataFromImageNames
};
