'use strict';

const cuboid = require('../cuboid'),
      TextureElement = require('../../../element/texture'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateTextureCoordinateData } = vertexUtilities,
      { vertexIndexData, initialVertexPositionData } = cuboid;

class TextureCuboid extends TextureElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotations, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotations),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          textureCuboid = TextureElement.fromProperties(TextureCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return textureCuboid;
  }
}

module.exports = TextureCuboid;
