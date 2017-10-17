'use strict';

const TextureCuboid = require('../common/cuboid/texture');

const SteelSection = (properties) => {
  const { position, width, height, depth } = properties;

  return (

    <TextureCuboid imageName="rustySteel.jpg" position={position} width={width} height={height} depth={depth} />
      
  );
};

module.exports = SteelSection;
