'use strict';

const Railing = require('../balcony/railing');

const { thickness } = Railing;

const LowerBalcony = (properties) => [

  <Railing offset={[ 40, 9.5, 16           ]} length={8} />,
  <Railing offset={[ 40, 9.5, 32-thickness ]} length={8} />,
  <Railing offset={[ 48, 9.5, 16           ]} rotation={[ 0, -90, 0]} length={16} />,

];

module.exports = LowerBalcony;
