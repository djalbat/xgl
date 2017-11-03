'use strict';

const Line = require('./line'),
      vec3 = require('./maths/vec3');

const { subtract } = vec3;

class LineInXYPlane extends Line {
  static fromVertices(startVertex, endVertex) {
    const position = startVertex.slice(),
          direction = subtract(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

    return lineInXYPlane;
  }
}

module.exports = LineInXYPlane;
