'use strict';

const React = require('../react'),
      example = require('../example'),
      arrayUtilities = require('../utilities/array'),
      ColourCuboid = require('./common/cuboid/colour'),
      TextureCuboid = require('./common/cuboid/texture');

const { flatten } = arrayUtilities;

function intermediate() {
  example(() => flatten([

    <ColourCuboid offset={[0, 0, 0]} width={1} depth={1} height={1} colour={[1, 0, 0, 1]} />,
    <TextureCuboid offset={[+2, +2, +2]} width={1} depth={1} height={1} imageName="bricks.jpg" />

  ]));
}

module.exports = intermediate;
