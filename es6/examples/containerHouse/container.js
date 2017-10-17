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
  const { position = defaultOffset, rotations = defaultRotations,  length } = properties;

  return ([

    frontWall(length, position, rotations),

    backWall(length, position, rotations),

    bottom(length, position, rotations),

    top(length, position, rotations),

    sideWallA(length, position, rotations),

    sideWallB(length, position, rotations),

  ]);
};

module.exports = Container;

const frontWall = (length, position, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} position={rotate(add(position, [ 0, 0, length ]))} width={width} height={height} rotations={[ 0, 0, 0 ]} />

  );
};

const backWall = (length, position, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} position={rotate(add(position, [ width, 0, 0 ]))} width={width} height={height} rotations={[ 0, -180, 0 ]} />

  );
};

const bottom = (length, position, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} position={rotate(add(position, [ 0, 0, 0 ]))} width={width} height={length} rotations={[ 90,  0, 0 ]} />

  );
};

const top = (length, position, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} position={rotate(add(position, [ 0, height, length ]))} width={width} height={length} rotations={[ -90, 0, 0 ]} />

  );
};

const sideWallA = (length, position, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} position={rotate(add(position, [ 0, 0, 0 ]))} width={length} height={height} rotations={[ 0, -90, 0 ]} />

  );
};

const sideWallB = (length, position, rotations) => {
  const rotate = composeRotate(rotations);

  return (

    <ColourPlane colour={colour} position={rotate(add(position, [ width, 0, length ]))} width={length} height={height} rotations={[ 0, 90, 0 ]} />

  );
};
