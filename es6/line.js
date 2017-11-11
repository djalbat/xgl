'use strict';

const vec3 = require('./maths/vec3');

const { subtract } = vec3;

class Line {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }

  static fromVertices(startVertex, endVertex) {
    const position = startVertex.slice(),
          direction = subtract(endVertex, startVertex),
          line = new Line(position, direction);

    return line;
  }
}

module.exports = Line;
