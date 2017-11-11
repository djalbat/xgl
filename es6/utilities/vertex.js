'use strict';

const vec3 = require('../maths/vec3');

const { transform } = vec3;

function rotate(vertex, rotationAboutZAxisMatrix) {
  let vec = vertex; ///

  const mat3 = rotationAboutZAxisMatrix;  ///

  vec = transform(vec, mat3);

  vertex = vec; ///

  return vertex;
}

function projectOntoXYPlane(vertex) {
  vertex = [...vertex.slice(0, 2), 0];  ///
  
  return vertex;
}

module.exports = {
  rotate: rotate,
  projectOntoXYPlane: projectOntoXYPlane
};
