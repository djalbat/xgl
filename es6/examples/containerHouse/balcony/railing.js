'use strict';

const vec3 = require('gl-vec3');  ///

const TopRail = require('./railing/topRail'),
      Uprights = require('./railing/uprights');

const { thickness } = TopRail,
      height = 3;

const Railing = (properties) => {
  const { offset, length } = properties;

  return ([

    <TopRail offset={add(offset, [ 0, 0, height ])} length={length} />,
    <Uprights offset={offset} height={height} length={length} />

  ]);
};

module.exports = Railing;

Object.assign(Railing, {
  thickness: thickness
});

function add(vec1, vec2) {
  const vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}
