'use strict';

const CanvasElement = require('../../../element/canvas'),
      FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

class SecondFloor extends CanvasElement {
  childElements() {
    return ([

      <FortyFootContainer position={[  0, 9.5, 32 ]} rotations={[ 0, 90, 0 ]} />,
      <FortyFootContainer position={[  0, 9.5, 24 ]} rotations={[ 0, 90, 0 ]} />,
      <TwentyFootContainer position={[ 8, 9.5, 16 ]} rotations={[ 0, 90, 0 ]} />,
      <TwentyFootContainer position={[ 8, 9.5,  8 ]} rotations={[ 0, 90, 0 ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(SecondFloor, properties); }
}

module.exports = SecondFloor;
