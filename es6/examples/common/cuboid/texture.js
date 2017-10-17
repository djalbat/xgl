'use strict';

const cuboid = require('../cuboid'),
      TextureElement = require('../../../element/texture'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateTextureCoordinateData } = vertexUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = cuboid;

class TextureCuboid extends TextureElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotation, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
          textureCuboid = TextureElement.fromProperties(TextureCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return textureCuboid;
  }
}

module.exports = TextureCuboid;

