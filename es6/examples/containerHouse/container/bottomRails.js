'use strict';

const BottomRail = require('./bottomRail'),
      CanvasElement = require('../../../element/canvas');

const { thickness } = BottomRail;

class BottomRails extends CanvasElement {
  childElements(properties) {
    const { length, overallWidth, } = properties;

    return ([

      <BottomRail position={[                      0, 0,                0 ]} length={overallWidth} />,
      <BottomRail position={[                      0, 0, length-thickness ]} length={overallWidth} />,
      <BottomRail position={[                      0, 0,           length ]} length={length} rotations={[ 0, 90, 0 ]} />,
      <BottomRail position={[ overallWidth-thickness, 0,           length ]} length={length} rotations={[ 0, 90, 0 ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(BottomRails, properties); }
}

module.exports = BottomRails;
