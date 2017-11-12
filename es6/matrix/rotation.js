'use strict';

const Matrix = require('../matrix'),
      matrixUtilities = require('../utilities/matrix');

const { identity4, rotate4 } = matrixUtilities;

class RotationMatrix extends Matrix {
  static fromAngles(angles) {
    const xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          zAngle = angles.getZAngle(),
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

    return rotationMatrix;
  }

  static fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle) {
    let matrix = identity4();

    matrix = rotate4(matrix, xAngle, [1, 0, 0]);
    matrix = rotate4(matrix, yAngle, [0, 1, 0]);
    matrix = rotate4(matrix, zAngle, [0, 0, 1]);

    const rotationMatrix = new RotationMatrix(matrix);

    return rotationMatrix;
  }
}

module.exports = RotationMatrix;
