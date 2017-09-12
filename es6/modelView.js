'use strict';

const mat4 = require('gl-mat4');  ///

const defaultXOffset = +0.0,
      defaultYOffset = +0.0,
      defaultZOffset = -6.0;

class ModelView {
  constructor(xOffset = defaultXOffset, yOffset = defaultYOffset, zOffset = defaultZOffset) {
    this.matrix = mat4.create();

    const offsetVector = [
      xOffset,
      yOffset,
      zOffset
    ];

    mat4.translate(this.matrix, this.matrix, offsetVector);
  }
  
  getMatrix() {
    return this.matrix;
  }
}

module.exports = ModelView;
