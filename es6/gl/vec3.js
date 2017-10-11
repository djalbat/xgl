'use strict';

const vec3 = require('gl-vec3');

function add(vec1, vec2) {
  const vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}

function subtract(vec1, vec2) {
  const vec = [];

  vec3.subtract(vec, vec1, vec2);

  return vec;
}

function cross(vec1, vec2) {
  const vec = [];

  vec3.cross(vec, vec1, vec2);

  return vec;
}

module.exports = {
  add: add,
  subtract: subtract,
  cross: cross,
};
