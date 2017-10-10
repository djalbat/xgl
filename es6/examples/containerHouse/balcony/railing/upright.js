'use strict';

const ColourCylinder = require('../../../common/cylinder/colour');

const thickness = 0.125,
      colour = [ 0.5, 0.5, 0.5, 1];

const Upright = (properties) => {
  const { offset, height } = properties,
        width = thickness, ///
        depth = thickness; ///

  return (

    <ColourCylinder colour={colour} offset={offset} width={width} depth={depth} height={height} />

  );
};


module.exports = Upright;
