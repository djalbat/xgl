'use strict';

const mat4 = require('gl-mat4');  ///

class Normal {
  constructor(matrix) {
    this.matrix = matrix;
  }
  
  getMatrix() {
    return this.matrix;
  }
  
  static fromRotation(rotation) {
    const matrix = mat4.create(),
          rotationMatrix = rotation.getMatrix();

    mat4.invert(matrix, rotationMatrix);    
    mat4.transpose(matrix, matrix);
    
    const normal = new Normal(matrix);
    
    return normal;
  }
}

module.exports = Normal;
