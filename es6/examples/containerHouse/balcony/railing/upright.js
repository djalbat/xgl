'use strict';

const ColouredCylinder = require('../../../common/coloured/cylinder');

const diameter = 0.125,
      radius = diameter / 2,
      colour = [ 0.5, 0.5, 0.5, 1];

const Upright = (properties) => {
  const { position, overallHeight } = properties,
        width = diameter, ///
        height = diameter, ///
        depth = overallHeight;  ///

  return (

    <ColouredCylinder colour={colour} width={width} height={height} depth={depth} position={position} rotations={[ -90, 0, 0 ]} />

  );
};

Object.assign(Upright, {
  radius: radius
});

module.exports = Upright;
