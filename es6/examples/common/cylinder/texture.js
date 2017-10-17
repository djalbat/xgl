'use strict';

const cylinder = require('../cylinder'),
      TextureElement = require('../../../element/texture'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateTextureCoordinateData } = vertexUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = cylinder;

class TextureCylinder extends TextureElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotation, imageName } = properties,
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
          textureCylinder = TextureElement.fromProperties(TextureCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);

    return textureCylinder;
  }
}

module.exports = TextureCylinder;

