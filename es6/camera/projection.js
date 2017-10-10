'use strict';

const mat4 = require('gl-mat4');  ///

const constants = require('../constants');

const { create, perspective } = mat4,
      { FIELD_OF_VIEW, Z_NEAR, Z_FAR } = constants;

class Projection {
  constructor(mat4) {
    this.mat4 = mat4;
  }
  
  getMatrix() {
    return this.mat4;
  }

  static fromWidthAndHeight(width, height) {
    const mat4 = create(),
          fieldOfView = FIELD_OF_VIEW,
          aspectRatio = width / height,
          zNear = Z_NEAR,
          zFar = Z_FAR,
          projection = new Projection(mat4);

    perspective(mat4, fieldOfView, aspectRatio, zNear, zFar);

    return projection;
  }
}

module.exports = Projection;
