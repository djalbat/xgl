'use strict';

const FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

const FirstFloor = (properties) => [

  <FortyFootContainer offset={[  8, 0, 24 ]} />,
  <FortyFootContainer offset={[  8, 0, 16 ]} />,
  <TwentyFootContainer offset={[ 8, 0,  8 ]} />,
  <TwentyFootContainer offset={[ 8, 0,  0 ]} />,

];

module.exports = FirstFloor;
