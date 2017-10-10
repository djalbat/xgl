'use strict';

const cylinder = require('../cylinder'),
      ColourElement = require('../../../element/colour'),
      arrayUtilities = require('../../../utilities/array'),
      vertexUtilities = require('../../../utilities/vertex');

const { flatten } = arrayUtilities,
      { calculateVertexPositionData } = vertexUtilities,
      { vertexIndexData, vertexNormalData, initialVertexPositionData } = cylinder;

const defaultOffset = [ 10, 10, 10 ];

class ColourCylinder extends ColourElement {
  static fromProperties(properties) {
    const { width, depth, height, offset, rotation, colour } = properties,
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset, rotation),
          colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);

    return colourCylinder;
  }
}

module.exports = ColourCylinder;

function calculateVertexColourData(initialVertexPositionData, colour) {
  const initialVertexPositionDataLength = initialVertexPositionData.length,
        vertexColoursLength = initialVertexPositionDataLength / 4,  ///
        vertexColour = colour,
        vertexColours = [];

  for (let index = 0; index < vertexColoursLength; index++) {
    vertexColours.push(vertexColour);
  }

  const vertexColourData = flatten(vertexColours);  ///

  return vertexColourData;
}
