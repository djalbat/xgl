"use strict";

import { first, second, third } from "../utilities/array";
import { normalise3, subtract3, cross3 } from "../maths/vector";

class Normal {
  constructor(extent) {
    this.extent = extent;
  }

  clone() {
    const extent = cloneExtent(this.extent),
          normal = new Normal(extent);

    return normal;
  }

  getExtent() {
    return this.extent;
  }
  
  static fromVertices(vertices) {
    const firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
          firstPosition = firstVertex.getPosition(),
          secondPosition = secondVertex.getPosition(),
          thirdPosition = thirdVertex.getPosition(),
          firstExtent = subtract3(secondPosition, firstPosition),
          secondExtent = subtract3(thirdPosition, firstPosition),
          extent = normalise3(cross3(firstExtent, secondExtent)),
          normal = new Normal(extent);

    return normal;
  }
}

module.exports = Normal;

function cloneExtent(extent) { return extent.slice(); }
