'use strict';

const FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

const FirstFloor = (properties) => [

  <FortyFootContainer position={[  8, 0, 32 ]} rotations={[ 0, 90, 0 ]} />,
  <FortyFootContainer position={[  8, 0, 24 ]} rotations={[ 0, 90, 0 ]} />,
  <TwentyFootContainer position={[ 8, 0, 16 ]} rotations={[ 0, 90, 0 ]} />,
  <TwentyFootContainer position={[ 8, 0,  8 ]} rotations={[ 0, 90, 0 ]} />,

];

module.exports = FirstFloor;
