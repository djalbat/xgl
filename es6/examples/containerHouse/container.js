'use strict';

const CanvasElement = require('../../element/canvas'),
      Roof = require('./container/roof'),
      SideWall = require('./container/sideWall'),
      BackWall = require('./container/backWall'),
      FrontWall = require('./container/frontWall'),
      Underside = require('./container/underside');

const overallHeight = 9.5,
      overallWidth = 8,
      colour = [ 1, 1, 1, 1 ];

class Container extends CanvasElement {
  childElements(properties) {
    const { length } = properties;

    return ([

      <Roof length={length} overallWidth={overallWidth} overallHeight={overallHeight} colour={colour} />,
      <Underside length={length} overallWidth={overallWidth} overallHeight={overallHeight} colour={colour} />,
      <FrontWall length={length} overallWidth={overallWidth} overallHeight={overallHeight} colour={colour} />,
      <BackWall length={length} overallWidth={overallWidth} overallHeight={overallHeight} colour={colour} />,
      <SideWall length={length} overallWidth={overallWidth} overallHeight={overallHeight} colour={colour} />,
      <SideWall length={length} overallWidth={overallWidth} overallHeight={overallHeight} colour={colour} position={[ overallWidth, 0, length ]} rotations={[ 0, 180, 0 ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Container, properties); }
}

module.exports = Container;
