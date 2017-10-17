'use strict';

const Container = require('../container');

const TwentyFootContainer = (properties) => {
  const { offset, rotations } = properties;

  return (

    <Container offset={offset} rotations={rotations} length={20} />
      
  );
};

module.exports = TwentyFootContainer;
