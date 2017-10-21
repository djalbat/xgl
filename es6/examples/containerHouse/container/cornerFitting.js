'use strict';

const ColouredCuboid = require('../../common/coloured/cuboid');

const colour = [ 1, 1, 1, 1 ],
      width = 9/12,
      height = 9/12,
      depth = 9/12;

const CornerFitting = (properties) => {
  const { position } = properties;

  return (

    <ColouredCuboid width={width} height={height} depth={depth} position={position} colour={colour} />

  );
};

Object.assign(CornerFitting, {
  width: width,
  height: height,
  depth: depth
});

module.exports = CornerFitting;
