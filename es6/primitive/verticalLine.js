'use strict';

const arrayUtilities = require('../utilities/array'),
      rotationUtilities = require('../utilities/rotation'),
      quaternionUtilities = require('../utilities/quaternion'),
      intersectionUtilities = require('../utilities/intersection');

const { first } = arrayUtilities,
      { rotatePosition } = rotationUtilities,
      { calculateIntersection } = intersectionUtilities,
      { calculateRotationAboutZAxisQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } = quaternionUtilities;

class VerticalLine {
  constructor(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    this.firstPositionComponent = firstPositionComponent;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  getFirstPositionComponent() {
    return this.firstPositionComponent;
  }
  
  getForwardsRotationQuaternion() {
    return this.forwardsRotationQuaternion;
  }

  getBackwardsRotationQuaternion() {
    return this.backwardsRotationQuaternion;
  }

  splitFacet(facet, smallerFacets) {
    const edges = facet.getEdges(),
          intersections = edges.map((edge) => {
            const intersection = calculateIntersection(edge, this.firstPositionComponent);

            return intersection;
          });

    facet.splitWithIntersections(intersections, smallerFacets);
  }

  splitFacets(facets) {
    const smallerFacets = [];

    facets.forEach((facet) => {
      facet.rotate(this.forwardsRotationQuaternion);

      this.splitFacet(facet, smallerFacets);
    });

    smallerFacets.forEach((smallerFacet) => smallerFacet.rotate(this.backwardsRotationQuaternion));

    return smallerFacets;
  }

  static fromMaskingEdge(maskingEdge) {
    const maskingEdgePosition = maskingEdge.getPosition(),
          rotationAboutZAxisQuaternion = calculateRotationAboutZAxisQuaternion(maskingEdge),
          rotationQuaternion = rotationAboutZAxisQuaternion,  ///
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(rotationQuaternion),
          position = rotatePosition(maskingEdgePosition, rotationQuaternion),
          positionComponents = position, ///
          firstPositionComponent = first(positionComponents),
          verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);

    return verticalLine;
  }
}

module.exports = VerticalLine;
