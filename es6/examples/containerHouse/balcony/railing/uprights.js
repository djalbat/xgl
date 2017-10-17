'use strict';

const vec3 = require('../../../../maths/vec3'),
      vec4 = require('../../../../maths/vec4'),
      Upright = require('./upright');

const { add } = vec3,
      { composeRotate } = vec4;

const Uprights = (properties) => {
  const { offset, rotations, height, length, thickness } = properties,
        overallOffset = offset,
        elements = [],
        step = 0.5,
        count = length / step;

  for (let index = 1; index < count; index++) {
    const offset = [ step * index, 0, thickness / 2, 1 ],
          rotate = composeRotate(rotations);

    elements.push(

      <Upright offset={add(overallOffset, rotate(offset))} rotations={rotations} height={height} />

    )
  }

  return elements;
};

module.exports = Uprights;
