'use strict';

const mat4 = require('../gl/mat4'),
      Matrix = require('../matrix'),
      constants = require('../constants');

const { create, perspective } = mat4,
      { FIELD_OF_VIEW, Z_NEAR, Z_FAR } = constants;

class ProjectionMatrix extends Matrix {
  static fromWidthAndHeight(width, height) {
    const mat4 = create(),
          fieldOfView = FIELD_OF_VIEW,
          aspectRatio = width / height,
          zNear = Z_NEAR,
          zFar = Z_FAR,
          projectionMatrix = new ProjectionMatrix(mat4);

    perspective(mat4, fieldOfView, aspectRatio, zNear, zFar);

    return projectionMatrix;
  }
}

module.exports = ProjectionMatrix;
