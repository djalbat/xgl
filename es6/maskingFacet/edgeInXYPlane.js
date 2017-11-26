'use strict';

const Edge = require('../facet/edge'),
      arrayUtilities = require('../utilities/array'),
      vectorUtilities = require('../utilities/vector'),
      vertexUtilities = require('../utilities/vertex');

const { third } = arrayUtilities,
      { subtract3, cross3 } = vectorUtilities,
      { projectOntoXYPlane } = vertexUtilities;

class EdgeInXYPlane extends Edge {
  isMidPointToTheLeft(midPoint) {
    midPoint = projectOntoXYPlane(midPoint);

    const position = this.getPosition(),
          extent = this.getExtent(),
          midPointDirection = subtract3(midPoint, position),
          crossProduct = cross3(extent, midPointDirection), ///
          crossProductComponents = crossProduct,  ///
          thirdCrossProductComponent = third(crossProductComponents),
          midPointToTheLeft = (thirdCrossProductComponent > 0);

    return midPointToTheLeft;
  }
  
  isMidPointToTheRight(midPoint) {
    const midPointToTheLeft = this.isMidPointToTheLeft(midPoint),
          midPointToTheRight = !midPointToTheLeft;  ///
    
    return midPointToTheRight;
  }
  
  static fromStartVertexAndEndVertex(startVertex, endVertex) {
    const position = startVertex.slice(), ///
          extent = subtract3(endVertex, startVertex),
          edgeInXYPlane = new EdgeInXYPlane(position, extent);

    return edgeInXYPlane;
  }
}

module.exports = EdgeInXYPlane;
