'use strict';

const Matrix = require('../matrix'),
      matrixUtilities = require('../utilities/matrix');

const { identity4, invert4, transpose4 } = matrixUtilities;

class NormalMatrix extends Matrix {
  static fromRotationMatrix(rotationMatrix) {
    const rotationMat4 = rotationMatrix.getMat4();

    let matrix = identity4();

    matrix = invert4(matrix, rotationMat4);

    matrix = transpose4(matrix);

    const normalMatrix = new NormalMatrix(matrix);

    return normalMatrix;
  }
}

module.exports = NormalMatrix;
