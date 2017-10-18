'use strict';

const ColouredCuboid = require('../../../common/coloured/cuboid');

const height = 0.1,
      thickness = 0.4,
      colour = [ 0.5, 0.5, 0.5, 1];

const TopRail = (properties) => {
  const { position, rotations, length } = properties,
        width = length, ///
        depth = thickness; ///

  return (

    <ColouredCuboid colour={colour} position={position} rotations={rotations} width={width} height={height} depth={depth} />

  );
};

Object.assign(TopRail, {
  thickness: thickness
});

module.exports = TopRail;
