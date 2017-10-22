'use strict';

const cuboid = require('../cuboid'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { initialVertexPositions } = cuboid;

class ColouredCuboid extends ColouredCanvasElement {
  getInitialVertexPositions() {
    return initialVertexPositions;
  }

  static fromProperties(properties) { return ColouredCanvasElement.fromProperties(ColouredCuboid, properties); }
}

module.exports = ColouredCuboid;
