'use strict';

const vec3 = require('gl-vec3');  ///

const Upright = require('./upright');

const Uprights = (properties) => {
  const { offset, height, length } = properties,
        elements = [],
        step = 0.5,
        count = length / step;

  for (let index = 1; index< count; index++) {
    elements.push(

      <Upright offset={add(offset, [ step * index, 0, 0 ])} height={height} />

    )
  }

  return elements;
};

module.exports = Uprights;

function add(vec1, vec2) {
  const vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}
