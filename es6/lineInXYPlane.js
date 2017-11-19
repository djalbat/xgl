'use strict';

const Line = require('./line'),
      vectorUtilities = require('./utilities/vector'),
      arrayUtilities = require('./utilities/array'),
      vertexUtilities = require('./utilities/vertex');

const { third } = arrayUtilities,
      { subtract3, cross3 } = vectorUtilities,
      { projectOntoXYPlane } = vertexUtilities;

class LineInXYPlane extends Line {
  isMidPointToTheLeft(midPoint) {
    midPoint = projectOntoXYPlane(midPoint);
    
    const position = this.getPosition(),
          direction = this.getDirection(),
          midPointDirection = subtract3(midPoint, position),
          crossProduct = cross3(direction, midPointDirection), ///
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
  
  static fromVertices(startVertex, endVertex) {
    const position = startVertex.slice(), ///
          direction = subtract3(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

    return lineInXYPlane;
  }
}

module.exports = LineInXYPlane;
