'use strict';

const Matrix = require('../matrix'),
      mathsUtiltities = require('../utilities/maths');

const { identity4, translate4 } = mathsUtiltities;

class PositionMatrix extends Matrix {
  static fromDistance(distance) {
    const x = 0,
          y = 0,
          z = -distance, ///
          positionMatrix = PositionMatrix.fromCoordinates(x, y, z);

    return positionMatrix;
  }

  static fromCoordinates(x, y, z) {
    let matrix = identity4();

    matrix = translate4(matrix, [ x, y, z ]);

    const positionMatrix = new PositionMatrix(matrix);

    return positionMatrix;
  }
}

module.exports = PositionMatrix;
