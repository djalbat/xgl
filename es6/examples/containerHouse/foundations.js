'use strict';

const React = require('../../react'),
      TextureCuboid = require('../common/cuboid/texture');

const foundations = (properties) => {
  return (

    <TextureCuboid offset={[0, 0, 0]} imageName="concrete.jpg" width={48} height={1} depth={32} />
      
  );
};

module.exports = foundations;
