'use strict';

const TextureCuboid = require('../../../common/cuboid/texture');

const height = 0.25,
      thickness = 0.1;

const Edge = (properties) => {
  const { position, width, depth } = properties;

  return (

    <TextureCuboid imageName="rustySteel.jpg" position={position} width={width} depth={depth} height={height} />

  );
};

Object.assign(Edge, {
  height: height,
  thickness: thickness
});

module.exports = Edge;
