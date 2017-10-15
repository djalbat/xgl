'use strict';

const TextureCuboid = require('../common/cuboid/texture');

const ConcreteSlab = (properties) => {
  const { offset, width, height, depth } = properties;

  return (

    <TextureCuboid imageName="concrete.jpg" offset={offset} width={width} height={height} depth={depth} />
      
  );
};

module.exports = ConcreteSlab;
