'use strict';

const TextureCuboid = require('../common/texture/cuboid');

const SteelSection = (properties) => {
  const { position, width, height, depth } = properties;

  return (

    <TextureCuboid imageName="rustySteel.jpg" position={position} width={width} height={height} depth={depth} />
      
  );
};

module.exports = SteelSection;
