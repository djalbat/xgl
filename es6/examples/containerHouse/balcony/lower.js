'use strict';

const CanvasElement = require('../../../element/canvas'),
      Railing = require('../balcony/railing');

const { thickness } = Railing;

class LowerBalcony extends CanvasElement {
  childElements() {
    return ([

      <Railing position={[ 40, 9.5, 16           ]} length={8} />,
      <Railing position={[ 40, 9.5, 32-thickness ]} length={8} />,
      <Railing position={[ 48, 9.5, 16           ]} rotations={[ 0, -90, 0]} length={16} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(LowerBalcony, properties); }
}

module.exports = LowerBalcony;
