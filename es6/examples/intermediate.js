'use strict';

const React = require('../react'),
      example = require('../example'),      
      ColourCube = require('./intermediate/cube/colour'),
      TextureCube = require('./intermediate/cube/texture');

function intermediate() {
  example(function() {
    const colourCube = <ColourCube offsetPosition={[0, 0, 0]} />,
          textureCube = <TextureCube offsetPosition={[+2, +2, +2]} />,
          elements = [  ///
            colourCube,
            textureCube
          ];
    
    return elements;
  });
}

module.exports = intermediate;
