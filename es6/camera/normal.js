'use strict';

const mat4 = require('gl-mat4');  ///

const { create, invert, transpose } = mat4;

class Normal {
  constructor(mat4) {
    this.mat4 = mat4;
  }
  
  getMatrix() {
    return this.mat4;
  }
  
  static fromRotation(rotation) {
    const mat4 = create(),
          rotationMatrix = rotation.getMatrix(),
          normal = new Normal(mat4);

    invert(mat4, rotationMatrix);
    
    transpose(mat4, mat4);
    
    return normal;
  }
}

module.exports = Normal;
