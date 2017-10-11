'use strict';

const vec2 = require('gl-vec2');

function add(vecA, vecB) {
  const vec = [];

  vec2.add(vec, vecA, vecB);

  return vec;
}

function subtract(vecA, vecB) {
  const vec = [];

  vec2.subtract(vec, vecA, vecB);

  return vec;
}

function scale(vecA, scalar) {
  const vec = [];

  vec2.scale(vec, vecA, scalar);

  return vec;
}

module.exports = {
  add: add,
  subtract: subtract,
  scale: scale
};
