'use strict';

const TextureCuboid = require('../common/cuboid/texture');

const SteelSection = (properties) => {
  const { offset, width, height, depth } = properties;

  return (

    <TextureCuboid imageName="rustySteel.jpg" offset={offset} width={width} height={height} depth={depth} />
      
  );
};

module.exports = SteelSection;
