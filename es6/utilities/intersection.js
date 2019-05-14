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
  const nonNullIntersections = intersections.reduce((nonNullIntersections, intersection) => {
    if (intersection !== null) {
      const nonNullIntersection = intersection; ///

      nonNullIntersections.push(nonNullIntersection);
    }

    return nonNullIntersections;
  }, []);

  return nonNullIntersections;
}

function calculateNullIntersectionIndex(intersections) {
  const nullIntersectionIndex = intersections.reduce((nullIntersectionIndex, intersection, index) => {
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
  const nullIntersectionIndex = intersections.reduce((nullIntersectionIndex, intersection, index) => {
    if (nullIntersectionIndex === null) {
      if (intersection !== null) {
        nullIntersectionIndex = index;
      }
    }

    return nullIntersectionIndex;
  }, null);

  return nullIntersectionIndex;
}

function calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection) {
  const extent = subtract3(endVertexPosition, startVertexPosition),
        offset = scale3(extent, intersection),
        intermediateVertexPosition = add3(startVertexPosition, offset);

  return intermediateVertexPosition;
}

module.exports = module.exports = {
  calculateIntersection,
  calculateNonNullIntersections,
  calculateNullIntersectionIndex,
  calculateNonNullIntersectionIndex,
  calculateIntermediateVertexPosition
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
  const edgeExtent = edge.getExtent(),
        edgePosition = edge.getPosition(),
        edgeExtentComponents = edgeExtent, ///
        edgePositionComponents = edgePosition, ///
        firstEdgeExtentComponent = first(edgeExtentComponents),
        firstEdgePositionComponent = first(edgePositionComponents),
        edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;

  return edgeIntersection;
}
