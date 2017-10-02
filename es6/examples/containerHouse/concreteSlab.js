'use strict';

const React = require('../../react'),
      TextureCuboid = require('../common/cuboid/texture');

const ConcreteSlab = (properties) => {
  const { offset, width, depth, height } = properties;

  return (

    <TextureCuboid imageName="concrete.jpg" offset={offset} width={width} depth={depth} height={height} />
      
  );
};

module.exports = ConcreteSlab;
