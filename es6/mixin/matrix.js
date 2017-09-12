'use strict';

function applyMatrix(uniformLocation, matrix) {
  const transpose = false;  ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

const bufferMixin = {
  applyMatrix: applyMatrix
};

module.exports = bufferMixin;
