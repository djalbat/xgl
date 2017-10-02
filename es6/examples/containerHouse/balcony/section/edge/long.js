'use strict';

const React = require('../../../../../react'),
      Edge = require('../edge');

const { thickness } = Edge;

const LongEdge = (properties) => {
  const { offset, depth } = properties,
        width = thickness;  ///

  return (

    <Edge offset={offset} width={width} depth={depth} />

  );
};

module.exports = LongEdge;
