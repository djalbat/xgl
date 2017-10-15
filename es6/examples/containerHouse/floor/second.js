'use strict';

const FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

const SecondFloor = (properties) => [

  <FortyFootContainer offset={[  0, 9.5, 24 ]} />,
  <FortyFootContainer offset={[  0, 9.5, 16 ]} />,
  <TwentyFootContainer offset={[ 8, 9.5,  8 ]} />,
  <TwentyFootContainer offset={[ 8, 9.5,  0 ]} />,

];

module.exports = SecondFloor;
