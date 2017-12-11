'use strict';

const cylinder = require('../cylinder'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertexCoordinates, defaultIndexes, defaultColour } = cylinder;

class ColouredCylinder extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertexCoordinates = defaultVertexCoordinates, indexes = defaultIndexes, colour = defaultColour } = properties,
          colouredCylinder = ColouredCanvasElement.fromProperties(ColouredCylinder, properties, vertexCoordinates, indexes, colour);

    return colouredCylinder;
  }
}

module.exports = ColouredCylinder;
