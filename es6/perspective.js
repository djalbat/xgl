'use strict';

const mat4 = require('gl-mat4');

const defaultFieldOfView = 45 * Math.PI / 180,
      defaultZNear = 0.1,
      defaultZFar = 100.0;

class Perspective {
  constructor(clientWidth, clientHeight, fieldOfView = defaultFieldOfView, zNear = defaultZNear, zFar = defaultZFar) {
    this.matrix = mat4.create();
    
    const aspectRatio = clientWidth / clientHeight;

    mat4.perspective(this.matrix, fieldOfView, aspectRatio, zNear, zFar);
  }
  
  getMatrix() {
    return this.matrix;
  }
}

module.exports = Perspective;
