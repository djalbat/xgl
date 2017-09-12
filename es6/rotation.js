'use strict';

const mat4 = require('gl-mat4');  ///

const defaultXAngle = 0.0,
      defaultYAngle = 0.0,
      defaultZAngle = 6.0,
      xAxisVectorArray = [1, 0, 0],
      yAxisVectorArray = [0, 1, 0],
      zAxisVectorArray = [0, 0, 1];

class Rotation {
  constructor(matrix) {
    this.matrix = matrix;
  }
  
  getMatrix() {
    return this.matrix;
  }

  static fromXAngleAndYAngle(xAngle, yAngle) {
    const zAngle = defaultZAngle,
          matrix = mat4.create();

    mat4.rotate(matrix, matrix, xAngle, xAxisVectorArray);
    mat4.rotate(matrix, matrix, yAngle, yAxisVectorArray);
    mat4.rotate(matrix, matrix, zAngle, zAxisVectorArray);

    const rotation = new Rotation(matrix);

    return rotation;
  }
}

module.exports = Rotation;
