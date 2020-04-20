"use strict";

import Edge from "../edge";

import { third } from "../../utilities/array";
import { subtract3, cross3 } from "../../maths/vector";
import { projectMidPointPositionOntoXYPlane } from "../../utilities/midPoint";

class MaskingEdge extends Edge {
  isMidPointPositionToTheLeft(midPointPosition) {
    midPointPosition = projectMidPointPositionOntoXYPlane(midPointPosition);  ///

    const extent = this.getExtent(),
          position = this.getPosition(),
          midPointRelativePosition = subtract3(midPointPosition, position),
          crossProductComponents = cross3(extent, midPointRelativePosition), ///
          thirdCrossProductComponent = third(crossProductComponents),
          midPointPositionToTheLeft = (thirdCrossProductComponent > 0);

    return midPointPositionToTheLeft;
  }
  
  isMidPointPositionToTheRight(midPointPosition) {
    const midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition),
          midPointPositionToTheRight = !midPointPositionToTheLeft;
    
    return midPointPositionToTheRight;
  }
  
  static fromStartVertexAndEndVertex(startVertex, endVertex) { return Edge.fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex); }
}

module.exports = MaskingEdge;
