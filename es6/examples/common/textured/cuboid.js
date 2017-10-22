'use strict';

const cuboid = require('../cuboid'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { initialVertexPositions } = cuboid;

class TexturedCuboid extends TexturedCanvasElement {
  getInitialVertexPositions() {
    return initialVertexPositions;
  }

  static fromProperties(properties) { return TexturedCanvasElement.fromProperties(TexturedCuboid, properties); }
}

module.exports = TexturedCuboid;
