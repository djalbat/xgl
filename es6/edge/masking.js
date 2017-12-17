'use strict';

const Edge = require('../edge'),
      vectorMaths = require('../maths/vector'),  
      arrayUtilities = require('../utilities/array'),
      midPointUtilities = require('../utilities/midPoint');

const { third } = arrayUtilities,
      { subtract3, cross3 } = vectorMaths,
      { projectMidPointPositionOntoXYPlane } = midPointUtilities;

class MaskingEdge extends Edge {
  isMidPointPositionToTheLeft(midPointPosition) {
    midPointPosition = projectMidPointPositionOntoXYPlane(midPointPosition);  ///

    const extent = this.getExtent(),
          position = this.getPosition(),
          midPointRelativePosition = subtract3(midPointPosition, position), ///
          crossProduct = cross3(extent, midPointRelativePosition), ///
          crossProductComponents = crossProduct,  ///
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
