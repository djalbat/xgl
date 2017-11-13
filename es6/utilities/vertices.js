'use strict';

const arrayUtilities = require('../utilities/array'),
      vectorUtilities = require('../utilities/vector'),
      rotationUtilities = require('../utilities/rotation');

const { subtract3, cross3 } = vectorUtilities,
      { first, second, third } = arrayUtilities,
      { calculateInverseRotationQuaternion, rotateImaginaryQuaternion } = rotationUtilities;

function calculateNormal(vertices) {
  const firstVertex = first(vertices),
        secondVertex = second(vertices),
        thirdVertex = third(vertices),
        firstEdge = subtract3(secondVertex, firstVertex),
        secondEdge = subtract3(thirdVertex, firstVertex),
        normal = cross3(firstEdge, secondEdge);

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
