'use strict';

const mat4 = require('../gl/mat4'),
      Matrix = require('../matrix');

const { create, translate } = mat4;

class PositionMatrix extends Matrix {
  static fromDistance(distance) {
    const xCoordinate = 0,
          yCoordinate = 0,
          zCoordinate = -distance, ///
          positionMatrix = PositionMatrix.fromCoordinates(xCoordinate, yCoordinate, zCoordinate);

    return positionMatrix;
  }

  static fromCoordinates(xCoordinate, yCoordinate, zCoordinate) {
    const mat4 = create(),
          positionMatrix = new PositionMatrix(mat4);

    translate(mat4, mat4, [ xCoordinate, yCoordinate, zCoordinate ]);

    return positionMatrix;
  }
}

module.exports = PositionMatrix;
