'use strict';

const CanvasElement = require('../../../element/canvas'),
      FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

class FirstFloor extends CanvasElement {
  childElements() {
    return ([

      <FortyFootContainer position={[  8, 0, 32 ]} rotations={[ 0, 90, 0 ]} />,
      <FortyFootContainer position={[  8, 0, 24 ]} rotations={[ 0, 90, 0 ]} />,
      <TwentyFootContainer position={[ 8, 0, 16 ]} rotations={[ 0, 90, 0 ]} />,
      <TwentyFootContainer position={[ 8, 0,  8 ]} rotations={[ 0, 90, 0 ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(FirstFloor, properties); }
}

module.exports = FirstFloor;
