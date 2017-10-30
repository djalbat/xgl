'use strict';

const vec3 = require('gl-vec3');

function add(vecA, vecB) {
  const out = [];

  vec3.add(out, vecA, vecB);

  return out;
}

function subtract(vecA, vecB) {
  const out = [];

  vec3.subtract(out, vecA, vecB);

  return out;
}

function dot(vecA, vecB) {
  const out = [];

  vec3.dot(out, vecA, vecB);

  return out;
}

function cross(vecA, vecB) {
  const out = [];

  vec3.cross(out, vecA, vecB);

  return out;
}

function normalise(vec) {
  const out = [];

  vec3.normalize(out, vec);

  return out;
}

module.exports = {
  add: add,
  subtract: subtract,
  dot: dot,
  cross: cross,
  normalise: normalise
};
