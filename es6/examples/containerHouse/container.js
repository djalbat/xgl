'use strict';

const CanvasElement = require('../../element/canvas'),
      Roof = require('./container/roof'),
      BackPanel = require('./container/panel/back'),
      FrontPanel = require('./container/panel/front'),
      SidePanelA = require('./container/panel/sideA'),
      SidePanelB = require('./container/panel/sideB'),
      TopRails = require('./container/topRails'),
      BottomRails = require('./container/bottomRails'),
      CornerPosts = require('./container/cornerPosts'),
      CornerFittings = require('./container/cornerFittings');

const overallWidth = 8,
      overallHeight = 9.5;

class Container extends CanvasElement {
  childElements(properties) {
    const { length } = properties;

    return ([

      <Roof length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,
      <FrontPanel length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,
      <BackPanel length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,
      <SidePanelA length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,
      <SidePanelB length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,
      <TopRails length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,
      <BottomRails length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,
      <CornerPosts length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,
      <CornerFittings length={length} overallWidth={overallWidth} overallHeight={overallHeight} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Container, properties); }
}

module.exports = Container;
