'use strict';

const plane = require('../plane'),
      TextureElement = require('../../../element/texture'),
      vertexUtilities = require('../../../utilities/vertex'),
      imageMapUtilities = require('../../../utilities/imageMap');

const { calculateVertexPositionData } = vertexUtilities,
      { textureCoordinateDataFromImageNames } = imageMapUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = plane;

class TexturePlane extends TextureElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotation, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(imageName),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
          texturePlane = TextureElement.fromProperties(TexturePlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return texturePlane;
  }
}

module.exports = TexturePlane;

function calculateTextureCoordinateData(imageName) {
  const imageNames = [
          imageName
        ],
        textureCoordinateData = textureCoordinateDataFromImageNames(imageNames);

  return textureCoordinateData;
}
