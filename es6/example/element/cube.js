'use strict';

const Face = require('./face');

const defaultC0lour = [ 1, 1, 0 ];

const Cube = (properties) => {
  const { colour = defaultC0lour } = properties;

  return ([

    <Face colour={colour} rotations={[   0,   0, 0 ]} />,
    <Face colour={colour} rotations={[ +90,   0, 0 ]} />,
    <Face colour={colour} rotations={[   0, +90, 0 ]} />,

    <Face colour={colour} rotations={[ 180,   0, 0 ]} />,
    <Face colour={colour} rotations={[ -90,   0, 0 ]} />,
    <Face colour={colour} rotations={[   0, -90, 0 ]} />,

  ]);
};

module.exports = Cube;
