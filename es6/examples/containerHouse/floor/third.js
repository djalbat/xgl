'use strict';

const TwentyFootContainer = require('../container/twentyFoot');

const ThirdFloor = (properties) => [

  <TwentyFootContainer offset={[ 0, 19, 24 ]} />,
  <TwentyFootContainer offset={[ 0, 19, 16 ]} />,
  <TwentyFootContainer offset={[ 8, 19,  8 ]} />,
  <TwentyFootContainer offset={[ 8, 19,  0 ]} />,

];

module.exports = ThirdFloor;
