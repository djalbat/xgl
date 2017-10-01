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

  static fromZCoordinate(zCoordinate) {
    const xCoordinate = defaultXCoordinate,
          yCoordinate = defaultYCoordinate,
          coordinateVector = [
            xCoordinate,
            yCoordinate,
            zCoordinate
          ],
          matrix = mat4.create();

    mat4.translate(matrix, matrix, coordinateVector);

    const position = new Position(matrix);
    
    return position;
  }
}

module.exports = Position;
