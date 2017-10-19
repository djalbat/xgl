'use strict';

const plane = require('../plane'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { initialVertexPositionData } = plane;

class TexturedPlane extends TexturedCanvasElement {
  getInitialVertexPositionData() {
    return initialVertexPositionData;
  }

  static fromProperties(properties) { return TexturedCanvasElement.fromProperties(TexturedPlane, properties); }
}

module.exports = TexturedPlane;
