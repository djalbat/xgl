'use strict';

const SteelSection = require('./steelSection');

const Frame = (properties) => {
  const width = 48,
        depth = 32,
        height = 29;

  return ([

    <SteelSection offset={ [      -0.5,      -0.5, 0 ] } width={1} depth={1} height={height} />,
    <SteelSection offset={ [      -0.5, depth-0.5, 0 ] } width={1} depth={1} height={height} />,
    <SteelSection offset={ [ width-0.5, depth-0.5, 0 ] } width={1} depth={1} height={height} />,
    <SteelSection offset={ [ width-0.5,      -0.5, 0 ] } width={1} depth={1} height={height} />,

    <SteelSection offset={ [      -0.5, -0.5, height-1 ] } width={1} depth={depth} height={1} />,
    <SteelSection offset={ [ width-0.5, -0.5, height-1 ] } width={1} depth={depth} height={1} />,

    <SteelSection offset={ [ -0.5,      -0.5, height-1 ] } width={width} depth={1} height={1} />,
    <SteelSection offset={ [ -0.5, depth-0.5, height-1 ] } width={width} depth={1} height={1} />,

  ]);
};

module.exports = Frame;
