'use strict';

const Container = require('../container');

const FortyFootContainer = (properties) => {
  const { offset, rotations } = properties;

  return (

    <Container offset={offset} rotations={rotations} length={40} />
      
  );
};

module.exports = FortyFootContainer;
