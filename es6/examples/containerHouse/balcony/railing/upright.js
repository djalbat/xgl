'use strict';

const ColourCuboid = require('../../../common/cuboid/colour');

const thickness = 0.125,
      colour = [ 0.5, 0.5, 0.5, 1];

const Upright = (properties) => {
  const { offset, height } = properties,
        width = thickness, ///
        depth = thickness; ///

  return (

    <ColourCuboid colour={colour} offset={offset} width={width} depth={depth} height={height} />

  );
};


module.exports = Upright;
