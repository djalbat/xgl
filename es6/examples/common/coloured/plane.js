'use strict';

const plane = require('../plane'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { initialVertexPositionData } = plane;

class ColouredPlane extends ColouredCanvasElement {
  getInitialVertexPositionData() {
    return initialVertexPositionData;
  }

  static fromProperties(properties) { return ColouredCanvasElement.fromProperties(ColouredPlane, properties); }
}

module.exports = ColouredPlane;
