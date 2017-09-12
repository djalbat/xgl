'use strict';

const mat4 = require('gl-mat4');  ///

const defaultXAngle = 0.0,
      defaultYAngle = 0.0,
      defaultZAngle = 6.0;

class Rotation {
  constructor(xAngle = defaultXAngle, yAngle = defaultYAngle, zAngle = defaultZAngle) {
    this.matrix = mat4.create();

    const xAxisVectorArray = [1, 0, 0],
          yAxisVectorArray = [0, 1, 0],
          zAxisVectorArray = [0, 0, 1];

    mat4.rotate(this.matrix, this.matrix, xAngle, xAxisVectorArray);
    mat4.rotate(this.matrix, this.matrix, yAngle, yAxisVectorArray);
    mat4.rotate(this.matrix, this.matrix, zAngle, zAxisVectorArray);
  }
  
  getMatrix() {
    return this.matrix;
  }
}

module.exports = Rotation;
