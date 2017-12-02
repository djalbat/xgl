'use strict';

const cylinder = require('../cylinder'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { defaultVertices, defaultIndexes, defaultTextureCoordinates } = cylinder;

class TexturedCylinder extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedCylinder = TexturedCanvasElement.fromProperties(TexturedCylinder, properties, vertices, indexes, textureCoordinates);

    return texturedCylinder;
  }
}

module.exports = TexturedCylinder;
