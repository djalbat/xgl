'use strict';

const vec2 = require('gl-vec2');

function add(vecA, vecB) {
  const out = [];

  vec2.add(out, vecA, vecB);

  return out;
}

function subtract(vecA, vecB) {
  const out = [];

  vec2.subtract(out, vecA, vecB);

  return out;
}

function scale(vecA, scalar) {
  const out = [];

  vec2.scale(out, vecA, scalar);

  return out;
}

function normalise(vec) {
  const out = [];

  vec2.normalize(out, vec);

  return out;
}

function transform(vec, mat2) {
  const out = [];

  vec2.transformMat2(out, vec, mat2);

  return out;
}

module.exports = {
  add: add,
  subtract: subtract,
  scale: scale,
  normalise: normalise,
  transform: transform
};
