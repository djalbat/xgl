'use strict';

const Line = require('./line'),
      vectorUtilities = require('./utilities/vector'),
      arrayUtilities = require('./utilities/array'),
      vertexUtilities = require('./utilities/vertex'),
      approximateUtilities = require('./utilities/approximate');

const { third } = arrayUtilities,
      { subtract3, cross3 } = vectorUtilities,
      { projectOntoXYPlane } = vertexUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities;

class LineInXYPlane extends Line {
  calculateVertexSide(vertex) {
    vertex = projectOntoXYPlane(vertex);
    
    let vertexSide = 0;

    const position = this.getPosition(),
          direction = this.getDirection(),
          vertexDirection = subtract3(vertex, position),
          zDirection = cross3(direction, vertexDirection), ///
          zDirectionComponents = zDirection,
          thirdZDirectionComponent = third(zDirectionComponents),
          thirdZDirectionComponentApproximatelyEqualToZero = isApproximatelyEqualToZero(thirdZDirectionComponent);

    if (!thirdZDirectionComponentApproximatelyEqualToZero) {
      vertexSide = (thirdZDirectionComponent > 0) ? +1 : -1; ///
    }

    return vertexSide;
  }
  
  static fromVertices(startVertex, endVertex) {
    const position = startVertex.slice(),
          direction = subtract3(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

    return lineInXYPlane;
  }
}

module.exports = LineInXYPlane;
