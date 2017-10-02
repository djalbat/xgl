'use strict';

const React = require('../../react'),
      TextureCuboid = require('../common/cuboid/texture');

const BalconySection = (properties) => {
  const { offset, narrow } = properties,
        width = narrow ? 4 : 8;

  return (

    <TextureCuboid imageName="steel.jpg" offset={offset} width={width} depth={16} height={0.5} />
      
  );
};

module.exports = BalconySection;
