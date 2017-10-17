'use strict';

const FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

const FirstFloor = (properties) => [

  <FortyFootContainer position={[  8, 0, 24 ]} />,
  <FortyFootContainer position={[  8, 0, 16 ]} />,
  <TwentyFootContainer position={[ 8, 0,  8 ]} />,
  <TwentyFootContainer position={[ 8, 0,  0 ]} />,

];

module.exports = FirstFloor;
