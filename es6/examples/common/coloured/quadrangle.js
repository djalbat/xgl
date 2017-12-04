'use strict';

const quadrangle = require('../quadrangle'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertices, defaultIndexes, defaultColour } = quadrangle;

class ColouredQuadrangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, colour = defaultColour } = properties,
          colouredQuadrangle = ColouredCanvasElement.fromProperties(ColouredQuadrangle, properties, vertices, indexes, colour);

    return colouredQuadrangle;
  }
}

module.exports = ColouredQuadrangle;
