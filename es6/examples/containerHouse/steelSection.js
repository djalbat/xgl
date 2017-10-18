'use strict';

const TexturedCuboid = require('../common/textured/cuboid');

const SteelSection = (properties) => {
  const { position, width, height, depth } = properties;

  return (

    <TexturedCuboid imageName="rustySteel.jpg" position={position} width={width} height={height} depth={depth} />
      
  );
};

module.exports = SteelSection;
