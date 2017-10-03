'use strict';

const cuboid = require('../cuboid'),
      ColourElement = require('../../../element/colour'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData } = vertexUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = cuboid;

class ColourCuboid extends ColourElement {
  static fromProperties(properties) {
    const { width, depth, height, offset, colour } = properties,
          vertexColourData = calculateVertexColourData(colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset),
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
