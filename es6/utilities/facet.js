'use strict';

const Edge = require('../edge'),
      constants = require('../constants'),
      arrayUtilities = require('../utilities/array'),
      vectorUtilities = require('../utilities/vector'),
      rotationUtilities = require('../utilities/rotation');

const { VERTICES_LENGTH } = constants,
      { subtract3, cross3 } = vectorUtilities,
      { first, second, third } = arrayUtilities,
      { calculateInverseRotationQuaternion, rotateImaginaryQuaternion } = rotationUtilities;

function cloneEdges(edges) {
  edges = edges.map(function(edge) {
    edge = edge.clone();

    return edge;
  });

  return edges;
}

function cloneNormal(normal) { return normal.slice(); }

function cloneVertices(vertices) {
  vertices = vertices.map(function(vertex) {
    vertex = vertex.slice();  ///

    return vertex;
  });

  return vertices;
}

function calculateEdges(vertices) {
  const edges = vertices.map(function(vertex, index) {
    const startIndex = index, ///
          endIndex = (startIndex + 1) % VERTICES_LENGTH,
          startVertex = vertices[startIndex],
          endVertex = vertices[endIndex],
          edge = Edge.fromVertices(startVertex, endVertex);

    return edge;
  });

  return edges;
}

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
  cloneEdges: cloneEdges,
  cloneNormal: cloneNormal,
  cloneVertices: cloneVertices,
  calculateEdges: calculateEdges,
  calculateNormal: calculateNormal,
  rotateVertices: rotateVertices
};


function rotateVertex(vertex, rotationQuaternion, inverseRotationQuaternion) {
  const imaginaryQuaternion = [0, ...vertex], ///
        rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  vertex = rotatedImaginaryQuaternion.slice(1); ///

  return vertex;
}
