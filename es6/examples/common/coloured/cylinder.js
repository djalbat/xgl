'use strict';

const cylinder = require('../cylinder'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { initialVertexPositionData } = cylinder;

class ColouredCylinder extends ColouredCanvasElement {
  getInitialVertexPositionData() {
    return initialVertexPositionData;
  }

  static fromProperties(properties) { return ColouredCanvasElement.fromProperties(ColouredCylinder, properties); }
}

module.exports = ColouredCylinder;
