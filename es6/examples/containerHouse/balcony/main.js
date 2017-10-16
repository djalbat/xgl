'use strict';

const Railing = require('../balcony/railing'),
    BalconySection = require('../balcony/section');

const { thickness } = Railing;

const MainBalcony = (properties) => [

  <BalconySection offset={[ 40, 19,  0 ]} />,
  <BalconySection offset={[ 44, 19,  0 ]} />,
  <BalconySection offset={[ 36, 19,  0 ]} />,
  <BalconySection offset={[ 32, 19,  0 ]} />,
  <BalconySection offset={[ 28, 19,  0 ]} />,
  <BalconySection offset={[ 40, 19, 16 ]} />,
  <BalconySection offset={[ 44, 19, 16 ]} />,

  <Railing offset={[ 28, 19,            0 ]} length={20} />,
  <Railing offset={[ 20, 19, 32-thickness ]} length={28} />,
  <Railing offset={[ 48, 19, 0            ]} rotation={[ 0, -90, 0]} length={32} />,

];

module.exports = MainBalcony;
