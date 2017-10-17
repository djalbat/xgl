'use strict';

const cylinder = require('../cylinder'),
      TextureElement = require('../../../element/texture'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateTextureCoordinateData } = vertexUtilities,
      { vertexIndexData, initialVertexPositionData } = cylinder;

class TextureCylinder extends TextureElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotations, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotations),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          textureCylinder = TextureElement.fromProperties(TextureCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return textureCylinder;
  }
}

module.exports = TextureCylinder;
