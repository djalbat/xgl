'use strict';

const vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array'),
      approximateUtilities = require('../utilities/approximate');

const { add3, subtract3, scale3 } = vectorMaths,
      { first, second } = arrayUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities;

function calculateIntersection(edge, firstPositionComponent) {
  let intersection = null;

  const edgeNonParallel = isEdgeNonParallel(edge);

  if (edgeNonParallel) {
    const edgeIntersection = calculateEdgeIntersection(edge, firstPositionComponent),
          edgeIntersectionNonTrivial = ((edgeIntersection > 0 ) && (edgeIntersection < 1));

    if (edgeIntersectionNonTrivial) {
      intersection = edgeIntersection;  ///
    }
  }

  return intersection;
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

module.exports = module.exports = {
  calculateIntersection: calculateIntersection,
  calculateNonNullIntersections: calculateNonNullIntersections,
  calculateNullIntersectionIndex: calculateNullIntersectionIndex,
  calculateNonNullIntersectionIndex: calculateNonNullIntersectionIndex,
  calculateIntermediateVertex: calculateIntermediateVertex
};

function isEdgeNonParallel(edge) {
  const edgeExtent = edge.getExtent(),
        edgeExtentComponents = edgeExtent, ///
        firstEdgeExtentComponent = first(edgeExtentComponents),
        secondEdgeExtentComponent = second(edgeExtentComponents),
        edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent,
        edgeAngleTangentApproximatelyEqualToZero = isApproximatelyEqualToZero(edgeAngleTangent),
        edgeParallel = edgeAngleTangentApproximatelyEqualToZero, ///
        edgeNonParallel = !edgeParallel;

  return edgeNonParallel;
}

function calculateEdgeIntersection(edge, firstPositionComponent) {
  const edgePosition = edge.getPosition(),
        edgeExtent = edge.getExtent(),
        edgePositionComponents = edgePosition, ///
        edgeExtentComponents = edgeExtent, ///
        firstEdgePositionComponent = first(edgePositionComponents),
        firstEdgeExtentComponent = first(edgeExtentComponents),
        edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;

  return edgeIntersection;
}
