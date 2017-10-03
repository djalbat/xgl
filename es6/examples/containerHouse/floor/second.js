'use strict';

const FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

const SecondFloor = (properties) => [

  <FortyFootContainer offset={[0, 0, 9.5]} />,
  <FortyFootContainer offset={[0, 8, 9.5]} />,
  <TwentyFootContainer offset={[8, 16, 9.5]} />,
  <TwentyFootContainer offset={[8, 24, 9.5]} />,

];

module.exports = SecondFloor;
