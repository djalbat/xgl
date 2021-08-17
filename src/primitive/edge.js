"use strict";

import { subtract3 } from "../maths/vector";

export default class Edge {
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

  static fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
    if (endVertex === undefined) {
      endVertex = startVertex;  ///
      startVertex = Class;  ///
      Class = Edge; ///
    }
    
    const startPosition = startVertex.getPosition(),
          endPosition = endVertex.getPosition(),
          position = startPosition.slice(), ///
          extent = subtract3(endPosition, startPosition),
          edge = new Class(position, extent);

    return edge;
  }
}
