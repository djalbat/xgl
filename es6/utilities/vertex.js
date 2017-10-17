'use strict';

const vec3 = require('../maths/vec3'),
      vec4 = require('../maths/vec4'),
      arrayUtilities = require('../utilities/array');

const { chop, flatten } = arrayUtilities,
      { subtract, cross } = vec3,
      { composeTransform } = vec4;

function calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation) {
  const transform = composeTransform(width, height, depth, offset, rotation);

  let vertexPositions = chop(initialVertexPositionData, 4);  ///

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    return transform(vertexPosition);
  });

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    return vertexPosition.slice(0, 3);  ///
  });
  
  const vertexPositionData = flatten(vertexPositions); 

  return vertexPositionData;
}

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

function calculateVertexNormalData(initialVertexPositionData) {
  const vertexNormalVectors = [],
        faces = chop(initialVertexPositionData, 16);  ///

  faces.forEach(function(face) {
    const vertexPositions = chop(face, 4);

    for (let index = 0; index < 4; index++) {
      const firstVertexIndex = index,
            secondVertexIndex = (index + 1) % 4,
            thirdVertexIndex = (index + 3) % 4,
            firstVertexPosition = vertexPositions[firstVertexIndex],
            secondVertexPosition = vertexPositions[secondVertexIndex],
            thirdVertexPosition = vertexPositions[thirdVertexIndex],
            firstVector = subtract(secondVertexPosition, firstVertexPosition),  ///
            secondVector = subtract(thirdVertexPosition, firstVertexPosition),  ///
            vertexNormalVector = cross(firstVector, secondVector);

      vertexNormalVectors.push(vertexNormalVector);
    }
  });
  
  const vertexNormalData = flatten(vertexNormalVectors); ///

  return vertexNormalData;
}

function calculateVertexIndexData(initialVertexPositionData) {
  const vertexIndexData = [],
        initialVertexPositionDataLength = initialVertexPositionData.length,
        facesLength = initialVertexPositionDataLength / 16; ///

  for (let index = 0; index < facesLength; index++) {
    const offset = index * 4;

    vertexIndexData.push(offset + 0);
    vertexIndexData.push(offset + 1);
    vertexIndexData.push(offset + 2);
    vertexIndexData.push(offset + 0);
    vertexIndexData.push(offset + 2);
    vertexIndexData.push(offset + 3);
  }

  return vertexIndexData;
}

module.exports = {
  calculateVertexPositionData: calculateVertexPositionData,
  calculateVertexColourData: calculateVertexColourData,
  calculateVertexNormalData: calculateVertexNormalData,
  calculateVertexIndexData: calculateVertexIndexData
};
