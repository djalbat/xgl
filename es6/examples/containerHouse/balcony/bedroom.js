'use strict';

const CanvasElement = require('../../../element/canvas'),
      BalconySection = require('../balcony/section'),
      Railing = require('../balcony/railing');

const { thickness } = Railing;

class BedroomBalcony extends CanvasElement {
  childElements() {
    return ([

      <BalconySection position={[ 0, 19, 0 ]} />,
      <BalconySection position={[ 4, 19, 0 ]} />,

      <Railing position={[         0, 19, 0 ]} length={8} />,
      <Railing position={[ thickness, 19, 0 ]} length={16} rotations={[ 0, -90, 0 ]}/>,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(BedroomBalcony, properties); }
}

module.exports = BedroomBalcony;
