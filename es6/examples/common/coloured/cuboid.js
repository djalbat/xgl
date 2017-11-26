'use strict';

const cuboid = require('../cuboid'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertices, defaultIndexes } = cuboid;

class ColouredCuboid extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes } = properties,
          colouredCuboid = ColouredCanvasElement.fromProperties(ColouredCuboid, properties, vertices, indexes);

    return colouredCuboid;
  }
}

module.exports = ColouredCuboid;
