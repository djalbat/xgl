'use strict';

const cuboid = require('../cuboid'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { indexes, defaultVertices } = cuboid;

class ColouredCuboid extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices } = properties,
          colouredCuboid = ColouredCanvasElement.fromProperties(ColouredCuboid, properties, vertices, indexes);

    return colouredCuboid;
  }
}

module.exports = ColouredCuboid;
