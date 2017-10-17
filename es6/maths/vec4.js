'use strict';

const vec4 = require('gl-vec4');

function transform(vec, mat4) {
  const out = [];

  vec4.transformMat4(out, vec, mat4);

  return out;
}

module.exports = {
  transform: transform
};
