'use strict';

const vectorMaths = require('./maths/vector');

const { subtract3 } = vectorMaths;

class Edge {
  constructor(position, extent) {
    this.position = position;
    this.extent = extent;
  }

  clone() {
    const position = clonePosition(this.position),
          extent = cloneExtent(this.extent),
          edge = new Edge(position, extent);

    return edge;
  }

  getPosition() {
    return this.position;
  }

  getExtent() {
    return this.extent;
  }
  
  static fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
    if (endVertex === undefined) {
      endVertex = startVertex;
      startVertex = Class;
      Class = Edge;
    }
    
    const startPosition = startVertex.getPosition(),
          endPosition = endVertex.getPosition(),
          position = startPosition.slice(), ///
          extent = subtract3(endPosition, startPosition),
          edge = new Class(position, extent);

    return edge;
  }
}

module.exports = Edge;

function clonePosition(position) { return position.slice(); }

function cloneExtent(extent) { return extent.slice(); }
