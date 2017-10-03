'use strict';

const TwentyFootContainer = require('../container/twentyFoot');

const ThirdFloor = (properties) => [

  <TwentyFootContainer offset={[0,  0, 19]} />,
  <TwentyFootContainer offset={[0,  8, 19]} />,
  <TwentyFootContainer offset={[8, 16, 19]} />,
  <TwentyFootContainer offset={[8, 24, 19]} />,

];

module.exports = ThirdFloor;
