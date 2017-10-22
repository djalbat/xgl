'use strict';

const plane = require('../plane'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { initialVertexPositions } = plane;

class ColouredPlane extends ColouredCanvasElement {
  getInitialVertexPositions() {
    return initialVertexPositions;
  }

  static fromProperties(properties) { return ColouredCanvasElement.fromProperties(ColouredPlane, properties); }
}

module.exports = ColouredPlane;
