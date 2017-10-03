'use strict';

const mat4 = require('gl-mat4');  ///

const defaultXCoordinate = +0.0,
      defaultYCoordinate = +0.0,
      defaultZCoordinate = -6.0;

class Position {
  constructor(matrix) {
    this.matrix = matrix;
  }
  
  getMatrix() {
    return this.matrix;
  }

  static fromZCoordinate(zCoordinate) { return Position.fromCoordinates(undefined, undefined, zCoordinate); }

  static fromCoordinates(xCoordinate = defaultXCoordinate, yCoordinate = defaultYCoordinate, zCoordinate = defaultZCoordinate) {
    const translationVector = [
            xCoordinate,
            yCoordinate,
            zCoordinate
          ],
          matrix = mat4.create(),
          position = new Position(matrix);

    mat4.translate(matrix, matrix, translationVector);

    return position;
  }
}

module.exports = Position;
