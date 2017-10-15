'use strict';

const ColourCuboid = require('../../../common/cuboid/colour');

const height = 0.1,
      thickness = 0.4,
      colour = [ 0.5, 0.5, 0.5, 1];

const TopRail = (properties) => {
  const { offset, length } = properties,
        width = length, ///
        depth = thickness; ///

  return (

    <ColourCuboid colour={colour} offset={offset} width={width} height={height} depth={depth} />

  );
};

Object.assign(TopRail, {
  thickness: thickness
});

module.exports = TopRail;
