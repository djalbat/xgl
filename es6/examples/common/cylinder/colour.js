'use strict';

const cylinder = require('../cylinder'),
      ColourElement = require('../../../element/colour'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexColourData } = vertexUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = cylinder;

class ColourCylinder extends ColourElement {
  static fromProperties(properties) {
    const { width, height, depth, offset, rotation, colour } = properties,
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
          colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);

    return colourCylinder;
  }
}

module.exports = ColourCylinder;
