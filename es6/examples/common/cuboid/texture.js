'use strict';

const cuboid = require('../cuboid'),
      TextureElement = require('../../../element/texture'),
      vertexUtilities = require('../../../utilities/vertex'),
      imageMapUtilities = require('../../../utilities/imageMap');

const { calculateVertexPositionData } = vertexUtilities,
      { textureCoordinateDataFromImageNames } = imageMapUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = cuboid;

class TextureCuboid extends TextureElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotation, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(imageName),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
          textureCuboid = TextureElement.fromProperties(TextureCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return textureCuboid;
  }
}

module.exports = TextureCuboid;

function calculateTextureCoordinateData(imageName) {
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
