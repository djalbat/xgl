'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array');

const { VERTICES_LENGTH } = constants,
      { first, second, third } = arrayUtilities,
      { subtract3, cross3, length3 } = vectorMaths;

function cloneEdges(edges) {
  edges = edges.map(function(edge) {
    edge = edge.clone();

    return edge;
  });

  return edges;
}

function cloneNormal(normal) {
  normal = normal.clone();
  
  return normal;
}

function cloneVertices(vertices) {
  vertices = vertices.map(function(vertex) {
    vertex = vertex.clone();

    return vertex;
  });

  return vertices;
}

function calculateEdges(vertices, Edge) {
  const edges = vertices.map(function(vertex, index) {
    const startIndex = index, ///
          endIndex = (startIndex + 1) % VERTICES_LENGTH,
          startVertex = vertices[startIndex],
          endVertex = vertices[endIndex],
          edge = Edge.fromStartVertexAndEndVertex(startVertex, endVertex);

    return edge;
  });

  return edges;
}

function calculateNormal(vertices, Normal) {
  const normal = Normal.fromVertices(vertices);

  return normal;
}

function calculateArea(vertices) {
  const firstVertex = first(vertices),
        secondVertex = second(vertices),
        thirdVertex = third(vertices),
        firstVertexPosition = firstVertex.getPosition(),
        secondVertexPosition = secondVertex.getPosition(),
        thirdVertexPosition = thirdVertex.getPosition(),
        firstExtent = subtract3(secondVertexPosition, firstVertexPosition),
        secondExtent = subtract3(thirdVertexPosition, firstVertexPosition),
        area = length3(cross3(firstExtent, secondExtent)) / 2;

  return area;
}

module.exports = {
  cloneEdges: cloneEdges,
  cloneNormal: cloneNormal,
  cloneVertices: cloneVertices,
  calculateEdges: calculateEdges,
  calculateNormal: calculateNormal,
  calculateArea: calculateArea
};
