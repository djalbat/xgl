'use strict';

const CanvasElement = require('../../../element/canvas'),
      TwentyFootContainer = require('../container/twentyFoot');

class ThirdFloor extends CanvasElement {
  childElements() {
    return ([

      <TwentyFootContainer position={[ 0, 19, 32 ]} rotations={[ 0, 90, 0 ]} />,
      <TwentyFootContainer position={[ 0, 19, 24 ]} rotations={[ 0, 90, 0 ]} />,
      <TwentyFootContainer position={[ 8, 19, 16 ]} rotations={[ 0, 90, 0 ]} />,
      <TwentyFootContainer position={[ 8, 19,  8 ]} rotations={[ 0, 90, 0 ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(ThirdFloor, properties); }
}

module.exports = ThirdFloor;
