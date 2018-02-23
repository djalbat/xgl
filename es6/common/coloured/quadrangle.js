'use strict';

const quadrangle = require('../quadrangle'),
      ColouredCanvasElement = require('../../element/canvas/coloured');

const { defaultVertexCoordinates, defaultIndexes, defaultColour } = quadrangle;

class ColouredQuadrangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertexCoordinates = defaultVertexCoordinates, indexes = defaultIndexes, colour = defaultColour } = properties,
          colouredQuadrangle = ColouredCanvasElement.fromProperties(ColouredQuadrangle, properties, vertexCoordinates, indexes, colour);

    return colouredQuadrangle;
  }
}

module.exports = ColouredQuadrangle;
