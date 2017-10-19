'use strict';

const CanvasElement = require('../../../element/canvas'),
      BalconySection = require('../balcony/section'),
      Railing = require('../balcony/railing');

const { thickness } = Railing;

class MainBalcony extends CanvasElement {
  childElements() {
    return ([

      <BalconySection position={[ 40, 19,  0 ]} />,
      <BalconySection position={[ 44, 19,  0 ]} />,
      <BalconySection position={[ 36, 19,  0 ]} />,
      <BalconySection position={[ 32, 19,  0 ]} />,
      <BalconySection position={[ 28, 19,  0 ]} />,
      <BalconySection position={[ 40, 19, 16 ]} />,
      <BalconySection position={[ 44, 19, 16 ]} />,

      <Railing position={[ 28, 19,            0 ]} length={20} />,
      <Railing position={[ 20, 19, 32-thickness ]} length={28} />,
      <Railing position={[ 48, 19, 0            ]} rotations={[ 0, -90, 0]} length={32} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(MainBalcony, properties); }
}

module.exports = MainBalcony;
