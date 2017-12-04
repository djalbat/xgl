'use strict';

const triangle = require('../triangle'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertices, defaultIndexes, defaultColour } = triangle;

class ColouredTriangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, colour = defaultColour } = properties,
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, vertices, indexes, colour);

    return colouredTriangle;
  }
}

module.exports = ColouredTriangle;
