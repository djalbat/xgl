'use strict';

const TopRail = require('./topRail'),
      CanvasElement = require('../../../element/canvas');

const { thickness } = TopRail;

class TopRails extends CanvasElement {
  childElements(properties) {
    const { length, overallWidth, overallHeight } = properties;

    return ([

      <TopRail position={[                      0, overallHeight,                0 ]} length={overallWidth} />,
      <TopRail position={[                      0, overallHeight, length-thickness ]} length={overallWidth} />,
      <TopRail position={[                      0, overallHeight,           length ]} length={length} rotations={[ 0, 90, 0 ]} />,
      <TopRail position={[ overallWidth-thickness, overallHeight,           length ]} length={length} rotations={[ 0, 90, 0 ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(TopRails, properties); }
}

module.exports = TopRails;
