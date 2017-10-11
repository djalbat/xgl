'use strict';

const mat4 = require('../gl/mat4'),
      Matrix = require('../matrix');

const { create, invert, transpose } = mat4;

class NormalMatrix extends Matrix {
  static fromRotationMatrix(rotationMatrix) {
    const mat4 = create(),
          rotationMat4 = rotationMatrix.getMat4(),
          normalMatrix = new NormalMatrix(mat4);

    invert(mat4, rotationMat4);
    
    transpose(mat4, mat4);
    
    return normalMatrix;
  }
}

module.exports = NormalMatrix;
