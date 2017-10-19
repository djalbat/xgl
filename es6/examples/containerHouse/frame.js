'use strict';

const SteelSection = require('./frame/steelSection'),
      CanvasElement = require('../../element/canvas');

class Frame extends CanvasElement {
  childElements() {
    const width = 48,
          height = 29,
          depth = 32;

    return ([

      <SteelSection position={ [      -0.5, 0,      -0.5 ] } width={1} height={height} depth={1} />,
      <SteelSection position={ [      -0.5, 0, depth-0.5 ] } width={1} height={height} depth={1} />,
      <SteelSection position={ [ width-0.5, 0, depth-0.5 ] } width={1} height={height} depth={1} />,
      <SteelSection position={ [ width-0.5, 0,      -0.5 ] } width={1} height={height} depth={1} />,

      <SteelSection position={ [      -0.5, height-1, -0.5 ] } width={1} height={1} depth={depth} />,
      <SteelSection position={ [ width-0.5, height-1, -0.5 ] } width={1} height={1} depth={depth} />,

      <SteelSection position={ [ -0.5, height-1,      -0.5 ] } width={width} height={1} depth={1} />,
      <SteelSection position={ [ -0.5, height-1, depth-0.5 ] } width={width} height={1} depth={1} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Frame, properties); }
}

module.exports = Frame;
