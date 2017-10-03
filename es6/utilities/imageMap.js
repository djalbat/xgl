'use strict';

const arrayUtilities = require('../utilities/array'),
      imageUtilities = require('../utilities/image');

const { flatten } = arrayUtilities,
      { preloadImage } = imageUtilities,
      { imageMapJSON } = runtimeConfiguration;

function preloadImageMap(callback) {
  const source = 'imageMap';  ///

  preloadImage(source, callback);
}

function textureCoordinateDataFromImageName(imageName) {
  const imageNames = [
          imageName,
          imageName,
          imageName,
          imageName,
          imageName,
          imageName
        ],
        textureCoordinateData = textureCoordinateDataFromImageNames(imageNames);
  
  return textureCoordinateData;
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
  textureCoordinateDataFromImageName: textureCoordinateDataFromImageName,
  textureCoordinateDataFromImageNames: textureCoordinateDataFromImageNames  
};
