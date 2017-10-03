'use strict';

const mat4 = require('gl-mat4');  ///

const defaultFieldOfView = 45 * Math.PI / 180,
      defaultZNear = 1,
      defaultZFar = 1000.0;

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
          matrix = mat4.create(),
          perspective = new Perspective(matrix);

    mat4.perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

    return perspective;
  }
}

module.exports = Perspective;
