'use strict';

const vectorUtilities = require('./utilities/vector');

const { subtract3 } = vectorUtilities;

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
    const position = startVertex.slice(), ///
          direction = subtract3(endVertex, startVertex),
          line = new Line(position, direction);

    return line;
  }
}

module.exports = Line;
