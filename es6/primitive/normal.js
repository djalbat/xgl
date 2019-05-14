'use strict';

const vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array');

const { first, second, third } = arrayUtilities,
      { normalise3, subtract3, cross3 } = vectorMaths;

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
