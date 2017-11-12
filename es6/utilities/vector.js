'use strict';

const vec2 = require('gl-vec2');
const vec3 = require('gl-vec3');
const vec4 = require('gl-vec4');

function length2(vector) { return vec2.length(vector); }

function length3(vector) { return vec3.length(vector); }

function length4(vector) { return vec4.length(vector); }

function dot2(vectorA, vectorB) { return vec2.dot(vectorA, vectorB); }

function dot3(vectorA, vectorB) { return vec3.dot(vectorA, vectorB); }

function dot4(vectorA, vectorB) { return vec4.dot(vectorA, vectorB); }

function cross3(vectorA, vectorB) { return vec3.cross([], vectorA, vectorB); }

function normalise2(vector) { return vec2.normalize([], vector); }  ///

function normalise3(vector) { return vec3.normalize([], vector); }  ///

function normalise4(vector) { return vec4.normalize([], vector); }  ///

function scale2(vector, scalar) { return vec2.scale([], vector, scalar); }

function scale3(vector, scalar) { return vec3.scale([], vector, scalar); }

function scale4(vector, scalar) { return vec4.scale([], vector, scalar); }

function add2(vectorA, vectorB) { return vec2.add([], vectorA, vectorB); }

function add3(vectorA, vectorB) { return vec3.add([], vectorA, vectorB); }

function add4(vectorA, vectorB) { return vec4.add([], vectorA, vectorB); }

function subtract2(vectorA, vectorB) { return vec2.subtract([], vectorA, vectorB); }

function subtract3(vectorA, vectorB) { return vec3.subtract([], vectorA, vectorB); }

function subtract4(vectorA, vectorB) { return vec4.subtract([], vectorA, vectorB); }

function transform2(vector, matrix) { return vec2.transformMat2([], vector, matrix); }  ///

function transform3(vector, matrix) { return vec3.transformMat3([], vector, matrix); }  ///

function transform4(vector, matrix) { return vec4.transformMat4([], vector, matrix); }  ///

module.exports = {
  length2: length2,
  length3: length3,
  length4: length4,
  dot2: dot2,
  dot3: dot3,
  dot4: dot4,
  cross3: cross3,
  normalise2: normalise2,
  normalise3: normalise3,
  normalise4: normalise4,
  scale2: scale2,
  scale3: scale3,
  scale4: scale4,
  add2: add2,
  add3: add3,
  add4: add4,
  subtract2: subtract2,
  subtract3: subtract3,
  subtract4: subtract4,
  transform2: transform2,
  transform3: transform3,
  transform4: transform4
};
