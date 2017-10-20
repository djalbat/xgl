'use strict';

const CanvasElement = require('../../element/canvas'),
      Roof = require('./container/roof'),
      BackWall = require('./container/backWall'),
      Underside = require('./container/underside'),
      FrontWall = require('./container/frontWall'),
      SideWallA = require('./container/sideWallA'),
      SideWallB = require('./container/sideWallB');

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
      <SideWallA length={length} overallWidth={overallWidth} overallHeight={overallHeight} colour={colour} />,
      <SideWallB length={length} overallWidth={overallWidth} overallHeight={overallHeight} colour={colour} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Container, properties); }
}

module.exports = Container;
