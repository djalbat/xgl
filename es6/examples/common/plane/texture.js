'use strict';

const plane = require('../plane'),
      TextureElement = require('../../../element/texture'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateTextureCoordinateData } = vertexUtilities,
      { vertexIndexData, initialVertexPositionData } = plane;

class TexturePlane extends TextureElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotations, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotations),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          texturePlane = TextureElement.fromProperties(TexturePlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return texturePlane;
  }
}

module.exports = TexturePlane;
