'use strict';

const Line = require('./line'),
      vec3 = require('./maths/vec3'),
      arrayUtilities = require('./utilities/array'),
      vertexUtilities = require('./utilities/vertex'),
      approximateUtilities = require('./utilities/approximate');

const { subtract, cross } = vec3,
      { third } = arrayUtilities,
      { projectOntoXYPlane } = vertexUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities;

class LineInXYPlane extends Line {
  calculateVertexSide(vertex) {
    vertex = projectOntoXYPlane(vertex);
    
    let vertexSide = 0;

    const position = this.getPosition(),
          direction = this.getDirection(),
          vertexDirection = subtract(vertex, position),
          zDirection = cross(direction, vertexDirection), ///
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
          direction = subtract(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

    return lineInXYPlane;
  }
}

module.exports = LineInXYPlane;
