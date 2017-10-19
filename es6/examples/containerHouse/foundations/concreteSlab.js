'use strict';

const TexturedCuboid = require('../../common/textured/cuboid');

const ConcreteSlab = (properties) => {
  const { position, width, height, depth } = properties;

  return (

    <TexturedCuboid imageName="concrete.jpg" position={position} width={width} height={height} depth={depth} />
      
  );
};

module.exports = ConcreteSlab;
