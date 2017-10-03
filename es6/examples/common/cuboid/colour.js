'use strict';

const cuboid = require('../cuboid'),
      ColourElement = require('../../../element/colour');

const { vertexIndexData, vertexNormalData, calculateVertexPositionData } = cuboid;

class ColourCuboid extends ColourElement {
  static fromProperties(properties) {
    const { width, depth, height, offset, colour } = properties,
          vertexColourData = calculateVertexColourData(colour),
          vertexPositionData = calculateVertexPositionData(width, depth, height, offset),
          colourCuboid = ColourElement.fromProperties(ColourCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);

    return colourCuboid;
  }
}

module.exports = ColourCuboid;

function calculateVertexColourData(colour) {
  let vertexColourData = [];

  for (let index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}
