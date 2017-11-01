'use strict';

const mat2 = require('gl-mat2');

function invert(mat) {
  let out = [];

  out = mat2.invert(out, mat);

  return out;
}

module.exports = {
  invert: invert
};
