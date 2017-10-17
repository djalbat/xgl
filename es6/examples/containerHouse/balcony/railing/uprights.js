'use strict';

const vec3 = require('../../../../maths/vec3'),
      Upright = require('./upright');

const { add } = vec3;

const Uprights = (properties) => {
  const { position, rotations, height, length, thickness } = properties,
        overallPosition = position,
        elements = [],
        step = 0.5,
        count = length / step;

  for (let index = 1; index < count; index++) {
    const position = [ step * index, 0, thickness / 2, 1 ];

    elements.push(

      <Upright position={add(overallPosition, position)} rotations={rotations} height={height} />

    )
  }

  return elements;
};

module.exports = Uprights;
