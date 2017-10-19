'use strict';

const cuboid = require('../cuboid'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { initialVertexPositionData } = cuboid;

class ColouredCuboid extends ColouredCanvasElement {
  getInitialVertexPositionData() {
    return initialVertexPositionData;
  }

  static fromProperties(properties) { return ColouredCanvasElement.fromProperties(ColouredCuboid, properties); }
}

module.exports = ColouredCuboid;
