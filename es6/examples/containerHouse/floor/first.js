'use strict';

const React = require('../../../react'),
      FortyFootContainer = require('../container/fortyFoot'),
      TwentyFootContainer = require('../container/twentyFoot');

const FirstFloor = (properties) => [

  <FortyFootContainer offset={[8, 0, 0]} />,
  <FortyFootContainer offset={[8, 8, 0]} />,
  <TwentyFootContainer offset={[8, 16, 0]} />,
  <TwentyFootContainer offset={[8, 24, 0]} />,

];

module.exports = FirstFloor;
