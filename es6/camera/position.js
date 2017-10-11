'use strict';

const mat4 = require('../gl/mat4');

const { create, translate } = mat4;

const defaultXCoordinate = +0.0,
      defaultYCoordinate = +0.0,
      defaultZCoordinate = -6.0;

class Position {
  constructor(mat4) {
    this.mat4 = mat4;
  }
  
  getMatrix() {
    return this.mat4;
  }

  static fromZCoordinate(zCoordinate) { return Position.fromCoordinates(undefined, undefined, zCoordinate); }

  static fromCoordinates(xCoordinate = defaultXCoordinate, yCoordinate = defaultYCoordinate, zCoordinate = defaultZCoordinate) {
    const mat4 = create(),
          position = new Position(mat4);

    translate(mat4, mat4, [ xCoordinate, yCoordinate, zCoordinate ]);

    return position;
  }
}

module.exports = Position;
