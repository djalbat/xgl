'use strict';

const cuboid = require('../cuboid'),
      ColourElement = require('../../../element/colour'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateVertexColourData } = vertexUtilities,
      { vertexIndexData, initialVertexPositionData } = cuboid;

class ColourCuboid extends ColourElement {
  static fromProperties(properties) {
    const { width, height, depth, position, rotations, colour } = properties,
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, position, rotations),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          colourCuboid = ColourElement.fromProperties(ColourCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);
    
    return colourCuboid;
  }
}

module.exports = ColourCuboid;
