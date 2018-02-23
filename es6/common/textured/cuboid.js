'use strict';

const cuboid = require('../cuboid'),
      TexturedCanvasElement = require('../../element/canvas/textured');

const { defaultVertexCoordinates, defaultIndexes, defaultImageName, defaultTextureCoordinates } = cuboid;

class TexturedCuboid extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertexCoordinates = defaultVertexCoordinates, indexes = defaultIndexes, imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedCuboid = TexturedCanvasElement.fromProperties(TexturedCuboid, properties, vertexCoordinates, indexes, imageName, textureCoordinates);

    return texturedCuboid;
  }
}

module.exports = TexturedCuboid;
