'use strict';

const cylinder = require('../cylinder'),
      ColourElement = require('../../../element/colour'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateVertexColourData } = vertexUtilities,
      { vertexIndexData, initialVertexPositionData } = cylinder;

class ColourCylinder extends ColourElement {
  static fromProperties(properties) {
    const { width, height, depth, position, rotations, colour } = properties,
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, position, rotations),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);

    return colourCylinder;
  }
}

module.exports = ColourCylinder;
