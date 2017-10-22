'use strict';

const cylinder = require('../cylinder'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { initialVertexPositions } = cylinder;

class ColouredCylinder extends ColouredCanvasElement {
  getInitialVertexPositions() {
    return initialVertexPositions;
  }

  static fromProperties(properties) { return ColouredCanvasElement.fromProperties(ColouredCylinder, properties); }
}

module.exports = ColouredCylinder;
