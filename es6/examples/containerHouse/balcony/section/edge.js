'use strict';

const React = require('../../../../react'),
      TextureCuboid = require('../../../common/cuboid/texture');

const height = 0.25,
      thickness = 0.1;

const Edge = (properties) => {
  const { offset, width, depth } = properties;

  return (

    <TextureCuboid imageName="steel.jpg" offset={offset} width={width} depth={depth} height={height} />

  );
};

Object.assign(Edge, {
  height: height,
  thickness: thickness
});

module.exports = Edge;
