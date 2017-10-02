'use strict';

const React = require('../../react'),
      TextureCuboid = require('../common/cuboid/texture');

const SteelSection = (properties) => {
  const { offset, width, depth, height } = properties;

  return (

    <TextureCuboid imageName="steel.jpg" offset={offset} width={width} depth={depth} height={height} />
      
  );
};

module.exports = SteelSection;
