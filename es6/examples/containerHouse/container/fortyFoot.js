'use strict';

const Container = require('../container');

const FortyFootContainer = (properties) => {
  const { position, rotations } = properties;

  return (

    <Container position={position} rotations={rotations} length={40} />
      
  );
};

module.exports = FortyFootContainer;
