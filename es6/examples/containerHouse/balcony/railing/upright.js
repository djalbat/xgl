'use strict';

const vec3 = require('../../../../maths/vec3'),
      ColourCylinder = require('../../../common/cylinder/colour');

const { add } = vec3,
      diameter = 0.125,
      colour = [ 0.5, 0.5, 0.5, 1];

const Upright = (properties) => {
  const { offset, height } = properties,
        overallHeight = height,
        upright = (() => {

          const width = diameter, ///
                height = diameter, ///
                radius = diameter / 2,
                depth = overallHeight;  ///

          return (

            <ColourCylinder colour={colour} offset={add(offset, [ -radius, 0, radius ])} width={width} height={height} depth={depth} rotations={[ -90, 0, 0 ]} />

          );

        })();

  return upright;
};

module.exports = Upright;
