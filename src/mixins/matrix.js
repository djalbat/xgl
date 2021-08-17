"use strict";

function applyMatrix(uniformLocation, matrix) {
  const transpose = false;  ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

const matrixMixins = {
  applyMatrix
};

export default matrixMixins;
