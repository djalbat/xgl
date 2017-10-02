'use strict';

const React = require('../../../react'),
      Container = require('../container');

const TwentyFootContainer = (properties) => {
  const { offset } = properties;

  return (

    <Container offset={offset} width={20} />
      
  );
};

module.exports = TwentyFootContainer;
