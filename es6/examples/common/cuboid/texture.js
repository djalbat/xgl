'use strict';

const cuboid = require('../cuboid'),
      TextureElement = require('../../../element/texture'),
      imageMapUtilities = require('../../../utilities/imageMap');

const { textureCoordinateDataFromImageNames } = imageMapUtilities,
      { vertexIndexData, vertexNormalData, calculateVertexPositionData } = cuboid;

class TextureCuboid extends TextureElement {
  static fromProperties(properties) {
    const { width, depth, height, offset, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(imageName),
          vertexPositionData = calculateVertexPositionData(width, depth, height, offset),
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
