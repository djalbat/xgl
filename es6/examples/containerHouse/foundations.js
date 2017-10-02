'use strict';

const React = require('../../react'),
      ConcreteSlab = require('./concreteSlab');

const Foundations = (properties) => {
  return ([

    <ConcreteSlab offset={[36, 0, -1]} width={12} depth={32} height={1} />,
    <ConcreteSlab offset={[0, 0, -1]} width={24} depth={32} height={1} />

  ]);
};

module.exports = Foundations;
