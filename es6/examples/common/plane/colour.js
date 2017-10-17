'use strict';

const plane = require('../plane'),
      ColourElement = require('../../../element/colour'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexColourData } = vertexUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = plane;

class ColourPlane extends ColourElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotation, colour } = properties,
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
          colourPlane = ColourElement.fromProperties(ColourPlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);
    
    return colourPlane;
  }
}

module.exports = ColourPlane;
