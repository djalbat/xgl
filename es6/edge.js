'use strict';

const vectorUtilities = require('./utilities/vector');

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
  
  clone() {
    const position = this.position.slice(),
          extent = this.extent.slice(),
          edge = new Edge(position, extent);
    
    return edge;
  }

  static fromVertices(startVertex, endVertex) {
    const position = startVertex.slice(), ///
          extent = subtract3(endVertex, startVertex),
          edge = new Edge(position, extent);

    return edge;
  }
}

module.exports = Edge;
