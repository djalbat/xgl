'use strict';

const cylinder = require('../cylinder'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { initialVertexPositions } = cylinder;

class TexturedCylinder extends TexturedCanvasElement {
  getInitialVertexPositions() {
    return initialVertexPositions;
  }

  static fromProperties(properties) { return TexturedCanvasElement.fromProperties(TexturedCylinder, properties); }
}

module.exports = TexturedCylinder;
