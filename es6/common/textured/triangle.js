'use strict';

const triangle = require('../triangle'),
      TexturedCanvasElement = require('../../element/canvas/textured');

const { defaultVertexCoordinates, defaultIndexes, defaultImageName, defaultTextureCoordinates } = triangle;

class TexturedTriangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertexCoordinates = defaultVertexCoordinates, indexes = defaultIndexes, imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, vertexCoordinates, indexes, imageName, textureCoordinates);

    return texturedTriangle;
  }
}

module.exports = TexturedTriangle;
