'use strict';

const vec3 = require('../maths/vec3'),
      arrayUtilities = require('../utilities/array'),
      quaternionUtilities = require('../utilities/quaternion');

const { subtract, cross } = vec3,
      { first, second, third } = arrayUtilities,
      { calculateInverseRotationQuaternion, rotateImaginaryQuaternion } = quaternionUtilities;

function calculateNormal(vertices) {
  const firstVertex = first(vertices),
        secondVertex = second(vertices),
        thirdVertex = third(vertices),
        firstEdge = subtract(secondVertex, firstVertex),
        secondEdge = subtract(thirdVertex, firstVertex),
        normal = cross(firstEdge, secondEdge);

  return normal;
}

function rotateVertices(vertices, rotationQuaternion) {
  const inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion);

  vertices = vertices.map(function(vertex) {
    vertex = rotateVertex(vertex, rotationQuaternion, inverseRotationQuaternion);

    return vertex;
  });
  
  return vertices;
}

module.exports = {
  calculateNormal: calculateNormal,
  rotateVertices: rotateVertices
};

function rotateVertex(vertex, rotationQuaternion, inverseRotationQuaternion) {
  const imaginaryQuaternion = [0, ...vertex], ///
        rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  vertex = rotatedImaginaryQuaternion.slice(1); ///

  return vertex;
}
