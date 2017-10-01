'use strict';

const React = require('../react'),
      example = require('../example'),      
      ColourCube = require('./intermediate/cube/colour'),
      TextureCube = require('./intermediate/cube/texture');

function intermediate() {
  example(function() {
    const elements = [
        
            <ColourCube offsetPosition={[0, 0, 0]} />,
            <TextureCube offsetPosition={[+2, +2, +2]} />
        
          ];
    
    return elements;
  });
}

module.exports = intermediate;
