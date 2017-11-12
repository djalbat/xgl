'use strict';

const Matrix = require('../matrix'),
      constants = require('../constants'),
      matrixUtilities = require('../utilities/matrix');

const { perspective4 } = matrixUtilities,
      { FIELD_OF_VIEW, Z_NEAR, Z_FAR } = constants;

class ProjectionMatrix extends Matrix {
  static fromWidthAndHeight(width, height) {
    const fieldOfView = FIELD_OF_VIEW,
          aspectRatio = width / height,
          zNear = Z_NEAR,
          zFar = Z_FAR,
          matrix = perspective4(fieldOfView, aspectRatio, zNear, zFar),
          projectionMatrix = new ProjectionMatrix(matrix);
    
    return projectionMatrix;
  }
}

module.exports = ProjectionMatrix;
