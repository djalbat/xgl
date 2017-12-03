'use strict';

const cuboid = require('../cuboid'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertices, defaultIndexes } = cuboid;

class ColouredCuboid extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, colour } = properties,
          colouredCuboid = ColouredCanvasElement.fromProperties(ColouredCuboid, properties, vertices, indexes, colour);

    return colouredCuboid;
  }
}

module.exports = ColouredCuboid;
