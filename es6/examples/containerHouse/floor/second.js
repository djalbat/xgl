'use strict';

const FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

const SecondFloor = (properties) => [

  <FortyFootContainer position={[  0, 9.5, 24 ]} />,
  <FortyFootContainer position={[  0, 9.5, 16 ]} />,
  <TwentyFootContainer position={[ 8, 9.5,  8 ]} />,
  <TwentyFootContainer position={[ 8, 9.5,  0 ]} />,

];

module.exports = SecondFloor;
