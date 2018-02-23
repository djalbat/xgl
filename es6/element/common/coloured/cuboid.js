'use strict';

const cuboid = require('../cuboid'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertexCoordinates, defaultIndexes, defaultColour } = cuboid;

class ColouredCuboid extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertexCoordinates = defaultVertexCoordinates, indexes = defaultIndexes, colour = defaultColour } = properties,
          colouredCuboid = ColouredCanvasElement.fromProperties(ColouredCuboid, properties, vertexCoordinates, indexes, colour);

    return colouredCuboid;
  }
}

module.exports = ColouredCuboid;
