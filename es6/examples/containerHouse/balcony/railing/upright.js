'use strict';

const vec3 = require('../../../../maths/vec3'),
      ColourCylinder = require('../../../common/colour/cylinder');

const { add } = vec3,
      diameter = 0.125,
      colour = [ 0.5, 0.5, 0.5, 1];

const Upright = (properties) => {
  const { position, height } = properties,
        overallHeight = height,
        upright = (() => {

          const width = diameter, ///
                height = diameter, ///
                radius = diameter / 2,
                depth = overallHeight;  ///

          return (

            <ColourCylinder colour={colour} position={add(position, [ -radius, 0, radius ])} width={width} height={height} depth={depth} rotations={[ -90, 0, 0 ]} />

          );

        })();

  return upright;
};

module.exports = Upright;
