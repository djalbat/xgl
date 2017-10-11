'use strict';

const vec3 = require('gl-vec3');

function add(vecA, vecB) {
  const vec = [];

  vec3.add(vec, vecA, vecB);

  return vec;
}

function subtract(vecA, vecB) {
  const vec = [];

  vec3.subtract(vec, vecA, vecB);

  return vec;
}

function cross(vecA, vecB) {
  const vec = [];

  vec3.cross(vec, vecA, vecB);

  return vec;
}

module.exports = {
  add: add,
  subtract: subtract,
  cross: cross
};
