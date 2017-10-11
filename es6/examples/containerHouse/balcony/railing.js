'use strict';

const vec3 = require('../../../gl/vec3'),
      TopRail = require('./railing/topRail'),
      Uprights = require('./railing/uprights');

const { add } = vec3,
      { thickness } = TopRail,
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
