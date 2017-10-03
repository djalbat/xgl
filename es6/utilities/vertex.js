'use strict';

const vec3 = require('gl-vec3'),  ///
      vec4 = require('gl-vec4'),  ///
      mat4 = require('gl-mat4');  ///

const arrayUtilities = require('../utilities/array');

const { dice, flatten } = arrayUtilities;

function calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset) {
  const matrix = mat4.create();

  mat4.translate(matrix, matrix, offset);
  mat4.scale(matrix, matrix, [width, depth, height]);

  let vertexPositions = dice(initialVertexPositionData, 4);  ///

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    return vec4.transformMat4(vertexPosition, vertexPosition, matrix);
  });

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    return vertexPosition.slice(0, 3);
  });

  return flatten(vertexPositions);
}

function calculateVertexNormalData(initialVertexPositionData) {
  const vertexNormalVectors = [],
        faces = dice(initialVertexPositionData, 16);

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

  return flatten(vertexNormalVectors);
}

module.exports = {
  calculateVertexPositionData: calculateVertexPositionData,
  calculateVertexNormalData: calculateVertexNormalData
};

function subtract(vec1, vec2) {
  const vec = [];

  vec3.subtract(vec, vec1, vec2);

  return vec;
}

function cross(vec1, vec2) {
  const vec = [];

  vec3.cross(vec, vec1, vec2);

  return vec;
}
