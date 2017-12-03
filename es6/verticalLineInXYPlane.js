'use strict';

const arrayUtilities = require('./utilities/array'),
      vectorUtilities = require('./utilities/vector'),
      vertexUtilities = require('./utilities/vertex'),
      rotationUtilities = require('./utilities/rotation'),
      approximateUtilities = require('./utilities/approximate');

const { normalise3 } = vectorUtilities,
      { first, second } = arrayUtilities,
      { rotateAboutZAxis } = vertexUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { calculateForwardsRotationAboutZAxisMatrix, calculateBackwardsRotationAboutZAxisMatrix } = rotationUtilities;

class VerticalLineInXYPlane {
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

  static fromEdgeInXYPlane(edgeInXYPlane) {
    const edgeInXYPlanePosition = edgeInXYPlane.getPosition(),
          rotationAboutZAxisMatrix = calculateRotationAboutZAxisMatrix(edgeInXYPlane),
          position = rotateAboutZAxis(edgeInXYPlanePosition, rotationAboutZAxisMatrix),
          positionComponents = position, ///
          firstPositionComponent = first(positionComponents),
          verticalLineInXYPlane = new VerticalLineInXYPlane(firstPositionComponent, rotationAboutZAxisMatrix);

    return verticalLineInXYPlane;
  }
}

module.exports = VerticalLineInXYPlane;

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

function calculateRotationAboutZAxisMatrix(edgeInXYPlane) {
  const edgeInXYPlaneExtent = edgeInXYPlane.getExtent(),
        unitEdgeInXYPlaneExtent = normalise3(edgeInXYPlaneExtent),
        unitEdgeInXYPlaneExtentComponents = unitEdgeInXYPlaneExtent,  ///
        firstUnitEdgeInXYPlaneExtentComponent = first(unitEdgeInXYPlaneExtentComponents),
        secondUnitEdgeInXYPlaneExtentComponent = second(unitEdgeInXYPlaneExtentComponents),
        angleOfRotationCosine = +secondUnitEdgeInXYPlaneExtentComponent,  ///
        angleOfRotationSine = -firstUnitEdgeInXYPlaneExtentComponent, ///
        c = angleOfRotationCosine,
        s = angleOfRotationSine,
        rotationAboutZAxisMatrix = [ c, -s, 0, +s, c, 0, 0, 0, 1 ];  ///

  return rotationAboutZAxisMatrix;
}
