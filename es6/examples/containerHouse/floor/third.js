'use strict';

const TwentyFootContainer = require('../container/twentyFoot');

const ThirdFloor = (properties) => [

  <TwentyFootContainer position={[ 0, 19, 32 ]} rotations={[ 0, 90, 0 ]} />,
  <TwentyFootContainer position={[ 0, 19, 24 ]} rotations={[ 0, 90, 0 ]} />,
  <TwentyFootContainer position={[ 8, 19, 16 ]} rotations={[ 0, 90, 0 ]} />,
  <TwentyFootContainer position={[ 8, 19,  8 ]} rotations={[ 0, 90, 0 ]} />,

];

module.exports = ThirdFloor;
