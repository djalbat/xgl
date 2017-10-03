'use strict';

const vec4 = require('gl-vec4'),  ///
      mat4 = require('gl-mat4');  ///

const arrayUtilities = require('../../utilities/array');

const { divide, flatten } = arrayUtilities;

const vertexPositionData = [

        0.0, 0.0, 1.0, 1,
        1.0, 0.0, 1.0, 1,
        1.0, 1.0, 1.0, 1,
        0.0, 1.0, 1.0, 1,

        0.0, 0.0, 0.0, 1,
        0.0, 1.0, 0.0, 1,
        1.0, 1.0, 0.0, 1,
        1.0, 0.0, 0.0, 1,

        0.0, 1.0, 0.0, 1,
        0.0, 1.0, 1.0, 1,
        1.0, 1.0, 1.0, 1,
        1.0, 1.0, 0.0, 1,

        0.0, 0.0, 0.0, 1,
        1.0, 0.0, 0.0, 1,
        1.0, 0.0, 1.0, 1,
        0.0, 0.0, 1.0, 1,

        1.0, 0.0, 0.0, 1,
        1.0, 1.0, 0.0, 1,
        1.0, 1.0, 1.0, 1,
        1.0, 0.0, 1.0, 1,

        0.0, 0.0, 0.0, 1,
        0.0, 0.0, 1.0, 1,
        0.0, 1.0, 1.0, 1,
        0.0, 1.0, 0.0, 1,

      ],
      vertexNormalData = [

        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,

        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,

        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,

        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,

        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,

        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,

      ],
      vertexIndexData = [

        0,  1,  2,
        0,  2,  3,

        4,  5,  6,
        4,  6,  7,

        8,  9, 10,
        8, 10, 11,

        12, 13, 14,
        12, 14, 15,

        16, 17, 18,
        16, 18, 19,

        20, 21, 22,
        20, 22, 23,

      ];

function calculateVertexPositionData(width, depth, height, offset) {
  const matrix = mat4.create();

  mat4.translate(matrix, matrix, offset);
  mat4.scale(matrix, matrix, [width, depth, height]);

  let vertexPositions = divide(vertexPositionData, 4);  ///

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    return vec4.transformMat4(vertexPosition, vertexPosition, matrix);
  });

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    return vertexPosition.slice(0, 3);
  });

  return flatten(vertexPositions);
}

module.exports = {
  vertexNormalData: vertexNormalData,
  vertexIndexData: vertexIndexData,
  calculateVertexPositionData: calculateVertexPositionData
};
