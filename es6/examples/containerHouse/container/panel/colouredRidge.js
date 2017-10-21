'use strict';

const ColouredCanvasElement = require('../../../../element/canvas/coloured');

const initialVertexPositionData = [

  0.0, 0.0, 0.0,
  0.5, 0.0, 0.0,
  0.5, 1.0, 0.0,
  0.0, 1.0, 0.0,

  0.5, 0.0, 0.0,
  1.5, 0.0, 1.0,
  1.5, 1.0, 1.0,
  0.5, 1.0, 0.0,

  1.5, 0.0, 1.0,
  2.5, 0.0, 1.0,
  2.5, 1.0, 1.0,
  1.5, 1.0, 1.0,

  2.5, 0.0, 1.0,
  3.5, 0.0, 0.0,
  3.5, 1.0, 0.0,
  2.5, 1.0, 1.0,

  3.5, 0.0, 0.0,
  4.0, 0.0, 0.0,
  4.0, 1.0, 0.0,
  3.5, 1.0, 0.0,

];

class ColouredRidge extends ColouredCanvasElement {
  getInitialVertexPositionData() {
    return initialVertexPositionData;
  }

  static fromProperties(properties) { return ColouredCanvasElement.fromProperties(ColouredRidge, properties); }
}

module.exports = ColouredRidge;
