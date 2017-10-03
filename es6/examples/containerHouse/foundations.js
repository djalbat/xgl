'use strict';

const React = require('../../react'),
      ConcreteSlab = require('./concreteSlab');

const Foundations = (properties) => [

  <ConcreteSlab offset={ [ -0.5, -0.5, -1] } width={12.5} depth={33} height={1} />,
  <ConcreteSlab offset={ [   24, -0.5, -1] } width={24.4} depth={33} height={1} />,

];

module.exports = Foundations;
