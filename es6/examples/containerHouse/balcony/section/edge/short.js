'use strict';

const Edge = require('../edge');

const { thickness } = Edge;

const ShortEdge = (properties) => {
  const { offset, width } = properties,
        depth = thickness;  ///

  return (

    <Edge offset={offset} width={width} depth={depth} />

  );
};

module.exports = ShortEdge;
