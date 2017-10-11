'use strict';

const mat4 = require('../gl/mat4');

const { create, translate } = mat4;

class Offset {
  constructor(mat4) {
    this.mat4 = mat4;
  }
  
  getMatrix() {
    return this.mat4;
  }

  static fromVec3(vec3) {
    const mat4 = create(),
          offset = new Offset(mat4);

    translate(mat4, mat4, vec3);

    return offset;
  }
}

module.exports = Offset;
