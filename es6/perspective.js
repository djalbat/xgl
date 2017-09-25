'use strict';

const mat4 = require('gl-mat4');  ///

const defaultFieldOfView = 45 * Math.PI / 180,
      defaultZNear = 0.1,
      defaultZFar = 100.0;

class Perspective {
  constructor(matrix) {
    this.matrix = matrix;
  }
  
  getMatrix() {
    return this.matrix;
  }

  static fromWidthAndHeight(width, height) {
    const aspectRatio = width / height,
          fieldOfView = defaultFieldOfView,
          zNear = defaultZNear,
          zFar = defaultZFar,
          matrix = mat4.create();

    mat4.perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

    const perspective = new Perspective(matrix);

    return perspective;
  }
}

module.exports = Perspective;
