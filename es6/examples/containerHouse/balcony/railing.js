'use strict';

const vec3 = require('../../../maths/vec3'),
      TopRail = require('./railing/topRail'),
      Uprights = require('./railing/uprights');

const { add } = vec3,
      { thickness } = TopRail,
      height = 3;

const Railing = (properties) => {
  const { offset, rotation, length } = properties;

  return ([

    <TopRail offset={add(offset, [ 0, height, 0 ])} rotation={rotation} length={length} />,
      
    <Uprights offset={offset} rotation={rotation} height={height} length={length} thickness={thickness} />

  ]);
};

Object.assign(Railing, {
  thickness: thickness
});

module.exports = Railing;
