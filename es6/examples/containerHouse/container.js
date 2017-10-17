'use strict';

const vec3 = require('../../maths/vec3'),
      ColourPlane = require('../common/plane/colour'),
      transformUtilities = require('../../utilities/transform');

const { add } = vec3,
      { composeRotate } = transformUtilities,
      height = 9.5,
      width = 8,
      colour = [ 1, 1, 1, 1 ],
      defaultOffset = [ 0, 0, 0 ],
      defaultRotations = [ 0, 0, 0 ];

const Container = (properties) => {
  const { offset = defaultOffset, rotations = defaultRotations,  length } = properties;

  return ([

    frontWall(length, offset, rotations),

    backWall(length, offset, rotations),

    bottom(length, offset, rotations),

    top(length, offset, rotations),

    sideWallA(length, offset, rotations),

    sideWallB(length, offset, rotations),

  ]);
};

module.exports = Container;

const frontWall = (length, offset, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} offset={rotate(add(offset, [ 0, 0, length ]))} width={width} height={height} rotations={[ 0, 0, 0 ]} />

  );
};

const backWall = (length, offset, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} offset={rotate(add(offset, [ width, 0, 0 ]))} width={width} height={height} rotations={[ 0, -180, 0 ]} />

  );
};

const bottom = (length, offset, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} offset={rotate(add(offset, [ 0, 0, 0 ]))} width={width} height={length} rotations={[ 90,  0, 0 ]} />

  );
};

const top = (length, offset, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} offset={rotate(add(offset, [ 0, height, length ]))} width={width} height={length} rotations={[ -90, 0, 0 ]} />

  );
};

const sideWallA = (length, offset, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} offset={rotate(add(offset, [ 0, 0, 0 ]))} width={length} height={height} rotations={[ 0, -90, 0 ]} />

  );
};

const sideWallB = (length, offset, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} offset={rotate(add(offset, [ width, 0, length ]))} width={length} height={height} rotations={[ 0, 90, 0 ]} />

  );
};
