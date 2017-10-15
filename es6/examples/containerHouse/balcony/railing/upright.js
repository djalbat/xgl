'use strict';

const vec3 = require('../../../../maths/vec3'),
      ColourCylinder = require('../../../common/cylinder/colour');

const { add } = vec3,
      thickness = 0.125,
      colour = [ 0.5, 0.5, 0.5, 1];

const Upright = (properties) => {
  const { offset, height } = properties,
        overallHeight = height,
        upright = (() => {

          const width = thickness, ///
                height = thickness, ///
                depth = overallHeight;  ///

          return (

            <ColourCylinder colour={colour} offset={add(offset, [ 0, 0, 2*thickness ])} width={width} height={height} depth={depth} rotation={[ -90, 0, 0 ]} />

          );

        })();

  return upright;
};

module.exports = Upright;
