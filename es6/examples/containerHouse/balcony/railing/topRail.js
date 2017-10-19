'use strict';

const ColouredCuboid = require('../../../common/coloured/cuboid');

const height = 0.1,
      thickness = 0.4,
      colour = [ 0.5, 0.5, 0.5, 1];

const TopRail = (properties) => {
  const { length, overallHeight } = properties,
        width = length, ///
        depth = thickness, ///
        position = [ 0, overallHeight, 0 ];

  return (

    <ColouredCuboid colour={colour} width={width} height={height} depth={depth} position={position} />

  );
};

Object.assign(TopRail, {
  thickness: thickness
});

module.exports = TopRail;
