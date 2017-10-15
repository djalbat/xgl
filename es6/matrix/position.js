'use strict';

const mat4 = require('../maths/mat4'),
      Matrix = require('../matrix');

const { create, translate } = mat4;

class PositionMatrix extends Matrix {
  static fromDistance(distance) {
    const x = 0,
          y = 0,
          z = -distance, ///
          positionMatrix = PositionMatrix.fromCoordinates(x, y, z);

    return positionMatrix;
  }

  static fromCoordinates(x, y, z) {
    const mat4 = create(),
          positionMatrix = new PositionMatrix(mat4);

    translate(mat4, mat4, [ x, y, z ]);

    return positionMatrix;
  }
}

module.exports = PositionMatrix;
