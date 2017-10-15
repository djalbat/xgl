'use strict';

const SteelSection = require('./steelSection');

const Frame = (properties) => {
  const width = 48,
        height = 29,
        depth = 32;

  return ([

    <SteelSection offset={ [      -0.5, 0,      -0.5 ] } width={1} height={height} depth={1} />,
    <SteelSection offset={ [      -0.5, 0, depth-0.5 ] } width={1} height={height} depth={1} />,
    <SteelSection offset={ [ width-0.5, 0, depth-0.5 ] } width={1} height={height} depth={1} />,
    <SteelSection offset={ [ width-0.5, 0,      -0.5 ] } width={1} height={height} depth={1} />,

    <SteelSection offset={ [      -0.5, height-1, -0.5 ] } width={1} height={1} depth={depth} />,
    <SteelSection offset={ [ width-0.5, height-1, -0.5 ] } width={1} height={1} depth={depth} />,

    <SteelSection offset={ [ -0.5, height-1,      -0.5 ] } width={width} height={1} depth={1} />,
    <SteelSection offset={ [ -0.5, height-1, depth-0.5 ] } width={width} height={1} depth={1} />,

  ]);
};

module.exports = Frame;
