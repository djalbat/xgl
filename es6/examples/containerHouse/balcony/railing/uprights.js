'use strict';

const vec3 = require('../../../../maths/vec3'),
      vec4 = require('../../../../maths/vec4'),
      Upright = require('./upright');

const { add } = vec3,
      { composeTransform } = vec4;

const Uprights = (properties) => {
  const { offset, rotation, height, length, thickness } = properties,
        overallOffset = offset,
        elements = [],
        step = 0.5,
        count = length / step;

  for (let index = 1; index < count; index++) {
    const offset = [ step * index, 0, thickness / 2, 1 ],
          transform = composeTransform(1, 1, 1, [ 0, 0, 0 ], rotation);

    transform(offset);

    elements.push(

      <Upright offset={add(overallOffset, offset)} rotation={rotation} height={height} />

    )
  }

  return elements;
};

module.exports = Uprights;
