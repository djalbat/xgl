'use strict';

const Container = require('../container');

const TwentyFootContainer = (properties) => {
  const { position, rotations } = properties;

  return (

    <Container position={position} rotations={rotations} length={20} />
      
  );
};

module.exports = TwentyFootContainer;
