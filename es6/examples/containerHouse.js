'use strict';

const React = require('../react'),
      example = require('../example'),
      ColourCube = require('./intermediate/cube/colour');

function containerHouse() {
  example(function() {
    const colourCube = <ColourCube offsetPosition={[0, 0, 0]} />,
          elements = [  ///
            colourCube
          ];

    return elements;
  });
}

module.exports = containerHouse;
