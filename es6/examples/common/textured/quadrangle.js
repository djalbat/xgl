'use strict';

const quadrangle = require('../quadrangle'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { defaultVertices, defaultIndexes, defaultTextureCoordinates } = quadrangle;

class TexturedQuadrangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, vertices, indexes, textureCoordinates);

    return texturedQuadrangle;
  }
}

module.exports = TexturedQuadrangle;
