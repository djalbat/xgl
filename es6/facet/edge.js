'use strict';

const vectorUtilities = require('../utilities/vector');

const { subtract3 } = vectorUtilities;

class Edge {
  constructor(position, extent) {
    this.position = position;
    this.extent = extent;
  }

  getPosition() {
    return this.position;
  }

  getExtent() {
    return this.extent;
  }

  static fromVertices(startVertex, endVertex) {
    const position = startVertex.slice(), ///
          extent = subtract3(endVertex, startVertex),
          edge = new Edge(position, extent);

    return edge;
  }
}

module.exports = Edge;
