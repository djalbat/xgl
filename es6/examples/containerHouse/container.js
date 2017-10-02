'use strict';

const React = require('../../react'),
      ColourCuboid = require('../common/cuboid/colour');

const Container = (properties) => {
  const { offset, width } = properties;

  return (

    <ColourCuboid colour={[1, 1, 1, 1]} offset={offset} width={width} depth={8} height={9.5} />
      
  );
};

module.exports = Container;
