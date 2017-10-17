'use strict';

const Edge = require('../edge');

const { thickness } = Edge;

const ShortEdge = (properties) => {
  const { position, width } = properties,
        depth = thickness;  ///

  return (

    <Edge position={position} width={width} depth={depth} />

  );
};

module.exports = ShortEdge;
