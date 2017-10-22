'use strict';

const plane = require('../plane'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { initialVertexPositions } = plane;

class TexturedPlane extends TexturedCanvasElement {
  getInitialVertexPositions() {
    return initialVertexPositions;
  }

  static fromProperties(properties) { return TexturedCanvasElement.fromProperties(TexturedPlane, properties); }
}

module.exports = TexturedPlane;
