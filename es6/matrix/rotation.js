'use strict';

const mat4 = require('../maths/mat4'),
      Matrix = require('../matrix');

const { create, rotate } = mat4;

class RotationMatrix extends Matrix {
  static fromAngles(angles) {
    const xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          zAngle = angles.getZAngle(),
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

    return rotationMatrix;
  }

  static fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle) {
    const mat4 = create(),
          rotationMatrix = new RotationMatrix(mat4);

    rotate(mat4, mat4, xAngle, [1, 0, 0]);
    rotate(mat4, mat4, yAngle, [0, 1, 0]);
    rotate(mat4, mat4, zAngle, [0, 0, 1]);

    return rotationMatrix;
  }
}

module.exports = RotationMatrix;
