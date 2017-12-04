'use strict';

const quadrangle = require('../quadrangle'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { defaultVertices, defaultIndexes, defaultImageName, defaultTextureCoordinates } = quadrangle;

class TexturedQuadrangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, vertices, indexes, imageName, textureCoordinates);

    return texturedQuadrangle;
  }
}

module.exports = TexturedQuadrangle;
