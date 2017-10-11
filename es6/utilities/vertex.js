'use strict';

const vec3 = require('../gl/vec3'),
      vec4 = require('../gl/vec4'),
      mat4 = require('../gl/mat4'),
      arrayUtilities = require('../utilities/array');

const { dice, flatten } = arrayUtilities,
      { create, translate, scale, rotate } = mat4,
      { transformMat4 } = vec4,
      { subtract, cross } = vec3;

const defaultWidth = 1,
      defaultDepth = 1,
      defaultHeight = 1,
      defaultOffset = [ 0, 0, 0 ],
      defaultRotation = [ 0, 0, 0];

function calculateVertexPositionData(initialVertexPositionData, width = defaultWidth, depth = defaultDepth, height = defaultHeight, offset = defaultOffset, rotation = defaultRotation) {
  const mat4 = create(),
        xAngle = rotation[0] * Math.PI / 180,
        yAngle = rotation[1] * Math.PI / 180,
        zAngle = rotation[2] * Math.PI / 180;

  translate(mat4, mat4, offset);

  rotate(mat4, mat4, xAngle, [1, 0, 0]);
  rotate(mat4, mat4, yAngle, [0, 1, 0]);
  rotate(mat4, mat4, zAngle, [0, 0, 1]);

  scale(mat4, mat4, [width, depth, height]);

  let vertexPositions = dice(initialVertexPositionData, 4);  ///

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    return transformMat4(vertexPosition, vertexPosition, mat4);
  });

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    return vertexPosition.slice(0, 3);
  });
  
  const vertexPositionData = flatten(vertexPositions); 

  return vertexPositionData;
}

function calculateVertexNormalData(initialVertexPositionData) {
  const vertexNormalVectors = [],
        faces = dice(initialVertexPositionData, 16);  ///

  faces.forEach(function(face) {
    const vertexPositions = dice(face, 4);

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
  calculateVertexNormalData: calculateVertexNormalData,
  calculateVertexIndexData: calculateVertexIndexData
};
