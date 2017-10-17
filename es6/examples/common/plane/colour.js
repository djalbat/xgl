'use strict';

const plane = require('../plane'),
      ColourElement = require('../../../element/colour'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateVertexColourData } = vertexUtilities,
      { vertexIndexData, initialVertexPositionData } = plane;

class ColourPlane extends ColourElement {
  static fromProperties(properties) {
    const { width, height, depth, position, rotations, colour } = properties,
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, position, rotations),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          colourPlane = ColourElement.fromProperties(ColourPlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);
    
    return colourPlane;
  }
}

module.exports = ColourPlane;
