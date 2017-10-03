'use strict';

const cylinder = require('../cylinder'),
      ColourElement = require('../../../element/colour'),
      vertexUtilities = require('../../../utilities/vertex');

const { calculateVertexPositionData } = vertexUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = cylinder;

class ColourCylinder extends ColourElement {
  static fromProperties(properties) {
    const { width, depth, height, offset, colour } = properties,
          vertexColourData = calculateVertexColourData(colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset),
          colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);

    return colourCylinder;
  }
}

module.exports = ColourCylinder;

function calculateVertexColourData(colour) {
  let vertexColourData = [];

  for (let index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}
