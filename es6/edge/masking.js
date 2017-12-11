'use strict';

const Edge = require('../edge'),
      vectorMaths = require('../maths/vector'),  
      arrayUtilities = require('../utilities/array');

const { third } = arrayUtilities,
      { subtract3, cross3 } = vectorMaths;

class MaskingEdge extends Edge {
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
  
  static fromStartVertexAndEndVertex(startVertex, endVertex) {
    const position = startVertex.slice(), ///
          extent = subtract3(endVertex, startVertex),
          maskingEdge = new MaskingEdge(position, extent);

    return maskingEdge;
  }
}

module.exports = MaskingEdge;

function projectOntoXYPlane(vertex) {
  vertex = [...vertex.slice(0, 2), 0];  ///

  return vertex;
}
