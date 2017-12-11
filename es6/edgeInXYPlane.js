'use strict';

const Edge = require('./edge'),
      vectorMaths = require('./maths/vector'),  
      arrayUtilities = require('./utilities/array');

const { third } = arrayUtilities,
      { subtract3, cross3 } = vectorMaths;

class EdgeInXYPlane extends Edge {
  isMidPointToTheLeft(midPoint) {
    midPoint = projectOntoXYPlane(midPoint);  ///

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
  
  static fromStartVertexInXYPlaneAndEndVertexInXYPlane(startVertexInXYPlane, endVertexInXYPlane) {
    const position = startVertexInXYPlane.slice(), ///
          extent = subtract3(endVertexInXYPlane, startVertexInXYPlane),
          edgeInXYPlane = new EdgeInXYPlane(position, extent);

    return edgeInXYPlane;
  }
}

module.exports = EdgeInXYPlane;

function projectOntoXYPlane(vertex) {
  vertex = [...vertex.slice(0, 2), 0];  ///

  return vertex;
}
