'use strict';

const mat4 = require('gl-mat4');  ///

const defaultXCoordinate = +0.0,
      defaultYCoordinate = +0.0,
      defaultZCoordinate = +0.0;

class Offset {
  constructor(matrix) {
    this.matrix = matrix;
  }
  
  getMatrix() {
    return this.matrix;
  }

  static fromXCoordinateAndYCoordinate(xCoordinate, yCoordinate) { return Offset.fromCoordinates(xCoordinate, yCoordinate, undefined); }

  static fromCoordinates(xCoordinate = defaultXCoordinate, yCoordinate = defaultYCoordinate, zCoordinate = defaultZCoordinate) {
    const coordinateVector = [
            xCoordinate,
            yCoordinate,
            zCoordinate
          ],
          matrix = mat4.create(),
          offset = new Offset(matrix);

    mat4.translate(matrix, matrix, coordinateVector);

    return offset;
  }
}

module.exports = Offset;
