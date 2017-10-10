'use strict';

const mat4 = require('gl-mat4');  ///

const { create, rotate } = mat4;

const defaultXAngle = 0.0,
      defaultYAngle = 0.0,
      defaultZAngle = 0.0;

class Rotation {
  constructor(mat4) {
    this.mat4 = mat4;
  }
  
  getMatrix() {
    return this.mat4;
  }

  static fromXAngleYAngleAndZAngle(xAngle = defaultXAngle, yAngle = defaultYAngle, zAngle = defaultZAngle) {
    const mat4 = create(),
          rotation = new Rotation(mat4);

    rotate(mat4, mat4, xAngle, [1, 0, 0]);
    rotate(mat4, mat4, yAngle, [0, 1, 0]);
    rotate(mat4, mat4, zAngle, [0, 0, 1]);

    return rotation;
  }
}

module.exports = Rotation;
