'use strict';

const Upright = require('./upright'),
      vec3 = require('../../../../maths/vec3'),
      CanvasElement = require('../../../../element/canvas');

const { add } = vec3;

class Uprights extends CanvasElement {
  childElements(properties) {
    const { position, rotations, height, length, thickness } = properties,
          overallPosition = position,
          elements = [],
          step = 0.5,
          count = length / step;

    for (let index = 1; index < count; index++) {
      const position = [step * index, 0, thickness / 2, 1];

      elements.push(

        <Upright position={add(overallPosition, position)} rotations={rotations} height={height}/>

      )
    }

    return elements;
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Uprights, properties); }
}

module.exports = Uprights;
