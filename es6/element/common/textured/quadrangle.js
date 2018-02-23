'use strict';

const quadrangle = require('../quadrangle'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { defaultVertexCoordinates, defaultIndexes, defaultImageName, defaultTextureCoordinates } = quadrangle;

class TexturedQuadrangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertexCoordinates = defaultVertexCoordinates, indexes = defaultIndexes, imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, vertexCoordinates, indexes, imageName, textureCoordinates);

    return texturedQuadrangle;
  }
}

module.exports = TexturedQuadrangle;
