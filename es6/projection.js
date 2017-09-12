'use strict';

const mat4 = require('gl-mat4');  ///

const defaultFieldOfView = 45 * Math.PI / 180,
      defaultZNear = 0.1,
      defaultZFar = 100.0;

class Projection {
  constructor(clientWidth, clientHeight, fieldOfView = defaultFieldOfView, zNear = defaultZNear, zFar = defaultZFar) {
    const aspectRatio = clientWidth / clientHeight;

    this.matrix = mat4.create();

    mat4.perspective(this.matrix, fieldOfView, aspectRatio, zNear, zFar);
  }
  
  getMatrix() {
    return this.matrix;
  }
}

module.exports = Projection;
