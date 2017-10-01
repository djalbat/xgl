'use strict';

const React = require('../../react'),
      TextureCuboid = require('../common/cuboid/texture');

const foundations = (properties) => {
  return (

    <TextureCuboid offsetPosition={[0, 0, 0]} imageName="concrete.jpg" />
      
  );
};

module.exports = foundations;
