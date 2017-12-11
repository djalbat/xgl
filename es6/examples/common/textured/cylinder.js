'use strict';

const cylinder = require('../cylinder'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { defaultVertexCoordinates, defaultIndexes, defaultImageName, defaultTextureCoordinates } = cylinder;

class TexturedCylinder extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertexCoordinates = defaultVertexCoordinates, indexes = defaultIndexes, imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedCylinder = TexturedCanvasElement.fromProperties(TexturedCylinder, properties, vertexCoordinates, indexes, imageName, textureCoordinates);

    return texturedCylinder;
  }
}

module.exports = TexturedCylinder;
