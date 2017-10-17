'use strict';

const FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

const SecondFloor = (properties) => [

  <FortyFootContainer position={[  0, 9.5, 32 ]} rotations={[ 0, 90, 0 ]} />,
  <FortyFootContainer position={[  0, 9.5, 24 ]} rotations={[ 0, 90, 0 ]} />,
  <TwentyFootContainer position={[ 8, 9.5, 16 ]} rotations={[ 0, 90, 0 ]} />,
  <TwentyFootContainer position={[ 8, 9.5,  8 ]} rotations={[ 0, 90, 0 ]} />,

];

module.exports = SecondFloor;
