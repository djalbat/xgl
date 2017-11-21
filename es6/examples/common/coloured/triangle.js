'use strict';

const triangle = require('../triangle'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { indexes, defaultVertices } = triangle;

class ColouredTriangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices } = properties,
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, vertices, indexes);

    return colouredTriangle;
  }
}

module.exports = ColouredTriangle;
