'use strict';

const Railing = require('../balcony/railing'),
      BalconySection = require('../balcony/section');

const { thickness } = Railing;

const MainBalcony = (properties) => [

  <BalconySection offset={[ 40,  0, 19 ]} />,
  <BalconySection offset={[ 44,  0, 19 ]} />,
  <BalconySection offset={[ 40, 16, 19 ]} />,
  <BalconySection offset={[ 44, 16, 19 ]} />,
  <BalconySection offset={[ 36, 16, 19 ]} />,
  <BalconySection offset={[ 32, 16, 19 ]} />,
  <BalconySection offset={[ 28, 16, 19 ]} />,

  <Railing offset={[20, 0, 19]} length={28} />,
  <Railing offset={[28, 32 - thickness, 19]} length={20} />,

];

module.exports = MainBalcony;
