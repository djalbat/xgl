'use strict';

const vec3 = require('../../maths/vec3'),
      ColourPlane = require('../common/plane/colour');

const { add } = vec3,
      height = 9.5,
      colour = [1, 1, 1, 1];

const Container = (properties) => {
  const { offset, width } = properties;

  return ([

    <ColourPlane colour={colour} offset={offset} width={width} height={height} />,

    <ColourPlane colour={colour} offset={add(offset, [ 0, 0, 8 ])} width={width} height={height} />,

    <ColourPlane colour={colour} offset={offset} width={8} height={height} rotation={[ 0, -90, 0 ]} />,

    <ColourPlane colour={colour} offset={add(offset, [ width, 0, 0 ])} width={8} height={height} rotation={[ 0, -90, 0 ]} />,

    <ColourPlane colour={colour} offset={offset} width={width} height={8} rotation={[ 90, 0, 0 ]} />,

    <ColourPlane colour={colour} offset={add(offset, [ 0, height, 0 ])} width={width} height={8} rotation={[ 90, 0, 0 ]} />,

  ]);
};

module.exports = Container;
