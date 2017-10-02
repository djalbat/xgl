'use strict';

const React = require('../../react'),
      ColourCuboid = require('../common/cuboid/colour');

const Container = (properties) => {
  const { offset, width } = properties;

  return (

    <ColourCuboid colour={[255, 255, 255, 0]} offset={offset} width={width} depth={8.5} height={9.5} />
      
  );
};

module.exports = Container;
