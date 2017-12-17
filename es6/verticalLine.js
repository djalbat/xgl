'use strict';

const arrayUtilities = require('./utilities/array'),
      rotationUtilities = require('./utilities/rotation'),
      intersectionUtilities = require('./utilities/intersection');

const { first } = arrayUtilities,
      { calculateIntersection } = intersectionUtilities,
      { rotatePositionAboutZAxis, calculateRotationAboutZAxisMatrix, calculateForwardsRotationAboutZAxisMatrix, calculateBackwardsRotationAboutZAxisMatrix } = rotationUtilities;

class VerticalLine {
  constructor(firstPositionComponent, forwardsRotationAboutZAxisMatrix, backwardsRotationAboutZAxisMatrix) {
    this.firstPositionComponent = firstPositionComponent;
    this.forwardsRotationAboutZAxisMatrix = forwardsRotationAboutZAxisMatrix;
    this.backwardsRotationAboutZAxisMatrix = backwardsRotationAboutZAxisMatrix;
  }

  getFirstPositionComponent() {
    return this.firstPositionComponent;
  }
  
  getForwardsRotationAboutZAxisMatrix() {
    return this.forwardsRotationAboutZAxisMatrix;
  }

  getBackwardsRotationAboutZAxisMatrix() {
    return this.backwardsRotationAboutZAxisMatrix;
  }

  splitFacet(facet, smallerFacets) {
    const edges = facet.getEdges(),
          intersections = edges.map(function(edge) {
            const intersection = calculateIntersection(edge, this.firstPositionComponent);

            return intersection;
          }.bind(this));

    facet.splitWithIntersections(intersections, smallerFacets);
  }

  splitFacets(facets) {
    const smallerFacets = [];

    facets.forEach(function(facet) {
      facet.rotateAboutZAxis(this.forwardsRotationAboutZAxisMatrix);

      this.splitFacet(facet, smallerFacets);
    }.bind(this));

    smallerFacets.forEach(function(smallerFacet) {
      smallerFacet.rotateAboutZAxis(this.backwardsRotationAboutZAxisMatrix);
    }.bind(this));

    return smallerFacets;
  }

  static fromMaskingEdge(maskingEdge) {
    const maskingEdgePosition = maskingEdge.getPosition(),
          rotationAboutZAxisMatrix = calculateRotationAboutZAxisMatrix(maskingEdge),
          position = rotatePositionAboutZAxis(maskingEdgePosition, rotationAboutZAxisMatrix),
          positionComponents = position, ///
          firstPositionComponent = first(positionComponents),
          forwardsRotationAboutZAxisMatrix = calculateForwardsRotationAboutZAxisMatrix(rotationAboutZAxisMatrix),
          backwardsRotationAboutZAxisMatrix = calculateBackwardsRotationAboutZAxisMatrix(rotationAboutZAxisMatrix),
          verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationAboutZAxisMatrix, backwardsRotationAboutZAxisMatrix);

    return verticalLine;
  }
}

module.exports = VerticalLine;
