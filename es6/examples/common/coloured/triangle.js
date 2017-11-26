'use strict';

const triangle = require('../triangle'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertices, defaultIndexes } = triangle;

class ColouredTriangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes } = properties,
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, vertices, indexes);

    return colouredTriangle;
  }
}

module.exports = ColouredTriangle;
