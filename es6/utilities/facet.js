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
  normal = normal.slice();  ///

  return normal;
}

function cloneVertices(vertices) {
  vertices = vertices.map(function(vertex) {
    vertex = vertex.slice();  ///

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

function calculateArea(vertices) {
  const firstVertex = first(vertices),
        secondVertex = second(vertices),
        thirdVertex = third(vertices),
        firstEdge = subtract3(secondVertex, firstVertex),
        secondEdge = subtract3(thirdVertex, firstVertex),
        area = length3(cross3(firstEdge, secondEdge)) / 2;

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
