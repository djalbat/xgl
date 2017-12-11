'use strict';

const arrayUtilities = require('./utilities/array'),
      rotationUtilities = require('./utilities/rotation'),
      approximateUtilities = require('./utilities/approximate');

const { first, second } = arrayUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { rotatePositionAboutZAxis, calculateRotationAboutZAxisMatrix, calculateForwardsRotationAboutZAxisMatrix, calculateBackwardsRotationAboutZAxisMatrix } = rotationUtilities;

class VerticalLine {
  constructor(firstPositionComponent, rotationAboutZAxisMatrix) {
    this.firstPositionComponent = firstPositionComponent;
    this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
  }

  getFirstPositionComponent() {
    return this.firstPositionComponent;
  }
  
  getRotationAboutZAxisMatrix() {
    return this.rotationAboutZAxisMatrix;
  }

  splitFacets(facets) {
    const smallerFacets = [],
          forwardsRotationAboutZAxisMatrix = calculateForwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix),
          backwardsRotationAboutZAxisMatrix = calculateBackwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix);
    
    facets.forEach(function(facet) {
      facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

      this.splitFacet(facet, smallerFacets);
    }.bind(this));
    
    smallerFacets.forEach(function(smallerFacet) {
      smallerFacet.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
    });

    return smallerFacets;    
  }

  splitFacet(facet, smallerFacets) {
    const intersections = this.calculateIntersectionsWithFacet(facet);

    facet.split(intersections, smallerFacets);
  }

  calculateIntersectionsWithFacet(facet) {
    const edges = facet.getEdges(),
          intersections = edges.map(function(edge) {
            const intersection = this.calculateIntersection(edge);

            return intersection;
          }.bind(this));

    return intersections;
  }
  
  calculateIntersection(edge) {
    let intersection = null;

    const edgeNonParallel = isEdgeNonParallel(edge);

    if (edgeNonParallel) {
      const edgeIntersection = this.calculateEdgeIntersection(edge),
            edgeIntersectionNonTrivial = isIntersectionNonTrivial(edgeIntersection);

      if (edgeIntersectionNonTrivial) {
        intersection = edgeIntersection;  ///
      }
    }

    return intersection;
  }

  calculateEdgeIntersection(edge) {
    const edgePosition = edge.getPosition(),
          edgeExtent = edge.getExtent(),
          edgePositionComponents = edgePosition, ///
          edgeExtentComponents = edgeExtent, ///
          firstEdgePositionComponent = first(edgePositionComponents),
          firstEdgeExtentComponent = first(edgeExtentComponents),
          edgeIntersection = (this.firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
    
    return edgeIntersection;
  }

  static fromMaskingEdge(maskingEdge) {
    const maskingEdgePosition = maskingEdge.getPosition(),
          rotationAboutZAxisMatrix = calculateRotationAboutZAxisMatrix(maskingEdge),
          position = rotatePositionAboutZAxis(maskingEdgePosition, rotationAboutZAxisMatrix),
          positionComponents = position, ///
          firstPositionComponent = first(positionComponents),
          verticalLine = new VerticalLine(firstPositionComponent, rotationAboutZAxisMatrix);

    return verticalLine;
  }
}

module.exports = VerticalLine;

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

function isIntersectionNonTrivial(intersection) {
  const intersectionNonTrivial = ((intersection > 0 ) && (intersection < 1));

  return intersectionNonTrivial;
}
