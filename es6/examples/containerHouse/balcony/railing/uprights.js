'use strict';

const Upright = require('./upright'),
      CanvasElement = require('../../../../element/canvas');

const { radius } = Upright;

class Uprights extends CanvasElement {
  childElements(properties) {
    const { overallHeight, length, thickness } = properties,
          step = 0.5,
          count = length / step,
          elements = [];

    for (let index = 1; index < count; index++) {
      const position = [step * index - radius, 0, thickness / 2 + radius];

      elements.push(

        <Upright position={position} overallHeight={overallHeight} />

      )
    }

    return elements;
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Uprights, properties); }
}

module.exports = Uprights;
