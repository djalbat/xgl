'use strict';

const cuboid = require('../cuboid'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { defaultVertices, defaultIndexes, defaultTextureCoordinates } = cuboid;

class TexturedCuboid extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedCuboid = TexturedCanvasElement.fromProperties(TexturedCuboid, properties, vertices, indexes, textureCoordinates);

    return texturedCuboid;
  }
}

module.exports = TexturedCuboid;
