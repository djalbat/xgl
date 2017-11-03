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
  const out = vec3.dot(vecA, vecB);

  return out;
}

function cross(vecA, vecB) {
  const out = [];

  vec3.cross(out, vecA, vecB);

  return out;
}

function scale(vec, scalar) {
  const out = [];

  vec3.scale(out, vec, scalar);

  return out;
}

function normalise(vec) {
  const out = [];

  vec3.normalize(out, vec);

  return out;
}

function transform(vec, mat3) {
  const out = [];

  vec3.transformMat3(out, vec, mat3);

  return out;
}

module.exports = {
  add: add,
  subtract: subtract,
  dot: dot,
  cross: cross,
  scale: scale,
  normalise: normalise,
  transform: transform
};
