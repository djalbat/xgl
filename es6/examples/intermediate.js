'use strict';

const React = require('../react'),
      example = require('../example'),      
      ColourCuboid = require('./common/cuboid/colour'),
      TextureCuboid = require('./common/cuboid/texture');

function intermediate() {
  example(function() {
    const elements = [
        
            <ColourCuboid offsetPosition={[0, 0, 0]} />,
            <TextureCuboid offsetPosition={[+2, +2, +2]} imageName="bricks.jpg" />
        
          ];
    
    return elements;
  });
}

module.exports = intermediate;
