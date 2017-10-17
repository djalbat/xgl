'use strict';

const TwentyFootContainer = require('../container/twentyFoot');

const ThirdFloor = (properties) => [

  <TwentyFootContainer position={[ 0, 19, 24 ]} />,
  <TwentyFootContainer position={[ 0, 19, 16 ]} />,
  <TwentyFootContainer position={[ 8, 19,  8 ]} />,
  <TwentyFootContainer position={[ 8, 19,  0 ]} />,

];

module.exports = ThirdFloor;
