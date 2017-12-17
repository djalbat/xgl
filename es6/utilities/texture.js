'use strict';

const vectorMaths = require('../maths/vector');

const { add2, multiply2 } = vectorMaths;

function cloneTextureCoordinates(textureCoordinates) {
  textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
    textureCoordinates = textureCoordinates.slice();

    return textureCoordinates;
  });

  return textureCoordinates;
}

function translateTextureCoordinates(textureCoordinates, left, bottom, width, height ) {
  textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
    textureCoordinates = add2(multiply2(textureCoordinates, [ width, height ] ), [ left, bottom ]);

    return textureCoordinates;
  });

  return textureCoordinates;
}

function textureCoordinatesFromTextureCoordinatesAndIndex(textureCoordinates, index) {  ///
  textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3);  ///

  return textureCoordinates;
}

module.exports = {
  cloneTextureCoordinates: cloneTextureCoordinates,
  translateTextureCoordinates: translateTextureCoordinates,
  textureCoordinatesFromTextureCoordinatesAndIndex: textureCoordinatesFromTextureCoordinatesAndIndex
};
