'use strict';

const cuboid = require('../cuboid'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { initialVertexPositionData } = cuboid;

class TexturedCuboid extends TexturedCanvasElement {
  getInitialVertexPositionData() {
    return initialVertexPositionData;
  }

  static fromProperties(properties) { return TexturedCanvasElement.fromProperties(TexturedCuboid, properties); }
}

module.exports = TexturedCuboid;
