'use strict';

const ColourCuboid = require('../common/cuboid/colour');

const Container = (properties) => {
  const { offset, width } = properties;

  return (

    <ColourCuboid colour={[1, 1, 1, 1]} offset={offset} width={width} height={9.5} depth={8} />
      
  );
};

module.exports = Container;
