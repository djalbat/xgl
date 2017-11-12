'use strict';

const Matrix = require('../matrix'),
      matrixUtilities = require('../utilities/matrix');

const { identity4, translate4 } = matrixUtilities;

class OffsetMatrix extends Matrix {
  static fromOffset(offset) {
    let matrix = identity4();

    matrix = translate4(matrix, offset);

    const offsetMatrix = new OffsetMatrix(matrix);

    return offsetMatrix;
  }
}

module.exports = OffsetMatrix;
