'use strict';

const vectorMaths = require('../maths/vector');

const { add3, subtract3, scale3 } = vectorMaths;

function calculateIntermediateVertex(startVertex, endVertex, intersection, Vertex) {
  const startPosition = startVertex.getPosition(),
        endPosition = endVertex.getPosition(),
        extent = subtract3(endPosition, startPosition),
        offset = scale3(extent, intersection),
        position = add3(startPosition, offset),
        vertex = new Vertex(position),
        intermediateVertex = vertex;  ///

  return intermediateVertex;
}

function calculateNonNullIntersections(intersections) {
  const nonNullIntersections = intersections.reduce(function(nonNullIntersections, intersection) {
    if (intersection !== null) {
      const nonNullIntersection = intersection; ///

      nonNullIntersections.push(nonNullIntersection);
    }

    return nonNullIntersections;
  }, []);

  return nonNullIntersections;
}

function calculateNullIntersectionIndex(intersections) {
  const nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex, intersection, index) {
    if (nullIntersectionIndex === null) {
      if (intersection === null) {
        nullIntersectionIndex = index;
      }
    }

    return nullIntersectionIndex;
  }, null);

  return nullIntersectionIndex;
}

function calculateNonNullIntersectionIndex(intersections) {
  const nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex, intersection, index) {
    if (nullIntersectionIndex === null) {
      if (intersection !== null) {
        nullIntersectionIndex = index;
      }
    }

    return nullIntersectionIndex;
  }, null);

  return nullIntersectionIndex;
}

module.exports = module.exports = {
  calculateIntermediateVertex: calculateIntermediateVertex,
  calculateNonNullIntersections: calculateNonNullIntersections,
  calculateNullIntersectionIndex: calculateNullIntersectionIndex,
  calculateNonNullIntersectionIndex: calculateNonNullIntersectionIndex
};
