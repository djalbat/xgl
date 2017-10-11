'use strict';

const mat4 = require('../gl/mat4'),
      Matrix = require('../matrix');

const { create, translate } = mat4;

class OffsetMatrix extends Matrix {
  static fromOffset(offset) {
    const mat4 = create(),
          offsetMatrix = new OffsetMatrix(mat4);

    translate(mat4, mat4, offset);

    return offsetMatrix;
  }
}

module.exports = OffsetMatrix;
