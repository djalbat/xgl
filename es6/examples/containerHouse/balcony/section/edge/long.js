'use strict';

const Edge = require('../edge');

const { thickness } = Edge;

const LongEdge = (properties) => {
  const { position, depth } = properties,
        width = thickness;  ///

  return (

    <Edge position={position} width={width} depth={depth} />

  );
};

module.exports = LongEdge;
