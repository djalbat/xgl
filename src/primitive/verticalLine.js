"use strict";

import { first } from "../utilities/array";
import { rotatePosition } from "../utilities/rotation";
import { calculateIntersection } from "../utilities/intersection";
import { calculateRotationAboutZAxisQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } from "../utilities/quaternion";

export default class VerticalLine {
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

  splitFacet(facet, smallerFacets, marginOfError) {
    const edges = facet.getEdges(),
          intersections = edges.map((edge) => {
            const intersection = calculateIntersection(edge, this.firstPositionComponent);

            return intersection;
          });

    facet.splitWithIntersections(intersections, smallerFacets, marginOfError);
  }

  splitFacets(facets, marginOfError) {
    const smallerFacets = [];

    facets.forEach((facet) => {
      facet.rotate(this.forwardsRotationQuaternion);

      this.splitFacet(facet, smallerFacets, marginOfError);
    });

    smallerFacets.forEach((smallerFacet) => {
      smallerFacet.rotate(this.backwardsRotationQuaternion);
    });

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
