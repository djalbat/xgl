'use strict';

const mat4 = require('./gl/mat4');

class Matrix {
  constructor(mat4) {
    this.mat4 = mat4;
  }
  
  getMat4() {
    return this.mat4;
  }
  
  apply(uniformLocation, canvas) {
    canvas.applyMatrix(uniformLocation, this.mat4);
  }
}

module.exports = Matrix;
