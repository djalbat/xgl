'use strict';

const CanvasElement = require('../../element/canvas'),
      ConcreteSlab = require('./concreteSlab');

class Foundations extends CanvasElement {
  getChildElements() {
    return ([

      <ConcreteSlab position={[ -0.5, -1, -0.5 ]} width={12.5} height={1} depth={33} />,
      <ConcreteSlab position={[   24, -1, -0.5 ]} width={24.4} height={1} depth={33} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Foundations, properties); }
}

module.exports = Foundations;
