'use strict';

const TextureCuboid = require('../common/cuboid/texture');

const ConcreteSlab = (properties) => {
  const { position, width, height, depth } = properties;

  return (

    <TextureCuboid imageName="concrete.jpg" position={position} width={width} height={height} depth={depth} />
      
  );
};

module.exports = ConcreteSlab;
