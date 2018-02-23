'use strict';

const triangle = require('../triangle'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertexCoordinates, defaultIndexes, defaultColour } = triangle;

class ColouredTriangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertexCoordinates = defaultVertexCoordinates, indexes = defaultIndexes, colour = defaultColour } = properties,
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, vertexCoordinates, indexes, colour);

    return colouredTriangle;
  }
}

module.exports = ColouredTriangle;
