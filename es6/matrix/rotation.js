'use strict';

const mat4 = require('../gl/mat4'),
      Matrix = require('../matrix');

const { create, rotate } = mat4;

const defaultXAngle = 0.0,
      defaultYAngle = 0.0,
      defaultZAngle = 0.0;

class RotationMatrix extends Matrix {
  static fromXAngleYAngleAndZAngle(xAngle = defaultXAngle, yAngle = defaultYAngle, zAngle = defaultZAngle) {
    const mat4 = create(),
          rotationMatrix = new RotationMatrix(mat4);

    rotate(mat4, mat4, xAngle, [1, 0, 0]);
    rotate(mat4, mat4, yAngle, [0, 1, 0]);
    rotate(mat4, mat4, zAngle, [0, 0, 1]);

    return rotationMatrix;
  }
}

module.exports = RotationMatrix;
