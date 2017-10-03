'use strict';

const vec3 = require('gl-vec3');  ///

const Edge = require('./section/edge'),
      LongEdge = require('./section/edge/long'),
      ShortEdge = require('./section/edge/short');

const width = 4,
      depth = 16;

const { height, thickness } = Edge;

const BalconySection = (properties) => {
  const { offset } = properties;

  return ([

    <LongEdge offset={add(offset, [ 0, 0, -height ])} depth={depth} />,

    <LongEdge offset={add(offset, [ width-thickness, 0, -height ])} depth={depth} />,

    <ShortEdge offset={add(offset, [ 0, 0, -height ])} width={width} />,

    <ShortEdge offset={add(offset, [ 0, 16-thickness, -height ])} width={width} />

  ]);
};

module.exports = BalconySection;

function add(vec1, vec2) {
  const vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}
