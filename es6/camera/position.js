'use strict';

const mat4 = require('../gl/mat4');

const { create, translate } = mat4;

class Position {
  constructor(mat4) {
    this.mat4 = mat4;
  }
  
  getMatrix() {
    return this.mat4;
  }

  static fromDistance(distance) {
    const xCoordinate = 0,
          yCoordinate = 0,
          zCoordinate = -distance, ///
          position = Position.fromCoordinates(xCoordinate, yCoordinate, zCoordinate);

    return position;
  }

  static fromCoordinates(xCoordinate, yCoordinate, zCoordinate) {
    const mat4 = create(),
          position = new Position(mat4);

    translate(mat4, mat4, [ xCoordinate, yCoordinate, zCoordinate ]);

    return position;
  }
}

module.exports = Position;
