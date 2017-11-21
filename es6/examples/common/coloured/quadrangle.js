'use strict';

const quadrangle = require('../quadrangle'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { indexes, defaultVertices } = quadrangle;

class ColouredQuadrangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices } = properties,
          colouredQuadrangle = ColouredCanvasElement.fromProperties(ColouredQuadrangle, properties, vertices, indexes);

    return colouredQuadrangle;
  }
}

module.exports = ColouredQuadrangle;
