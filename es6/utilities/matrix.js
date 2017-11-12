'use strict';

const mat2 = require('gl-mat2');
const mat3 = require('gl-mat3');
const mat4 = require('gl-mat4');

function identity2() { return mat2.create(); }

function identity3() { return mat3.create(); }

function identity4() { return mat4.create(); }

function invert2(matrix) { return mat2.invert([], matrix); }

function invert3(matrix) { return mat3.invert([], matrix); }

function invert4(matrix) { return mat4.invert([], matrix); }

function transpose2(matrix) { return mat2.transpose([], matrix); }

function transpose3(matrix) { return mat3.transpose([], matrix); }

function transpose4(matrix) { return mat4.transpose([], matrix); }

function scale2(matrix, vector) { return mat2.scale([], matrix, vector); }

function scale3(matrix, vector) { return mat3.scale([], matrix, vector); }

function scale4(matrix, vector) { return mat4.scale([], matrix, vector); }

function translate2(matrix, vector) { return mat2.translate([], matrix, vector); }

function translate3(matrix, vector) { return mat3.translate([], matrix, vector); }

function translate4(matrix, vector) { return mat4.translate([], matrix, vector); }

function perspective4(fieldOfView, aspectRatio, zNear, zFar) { return mat4.perspective([], fieldOfView, aspectRatio, zNear, zFar); }

function rotate4(matrix, angle, vector) { return mat4.rotate([], matrix, angle, vector); }

module.exports = {
  identity2: identity2,
  identity3: identity3,
  identity4: identity4,
  invert2: invert2,
  invert3: invert3,
  invert4: invert4,
  scale2: scale2,
  scale3: scale3,
  scale4: scale4,
  transpose2: transpose2,
  transpose3: transpose3,
  transpose4: transpose4,
  translate2: translate2,
  translate3: translate3,
  translate4: translate4,
  perspective4: perspective4,
  rotate4: rotate4
};
