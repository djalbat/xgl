'use strict';

const Railing = require('../balcony/railing'),
      BalconySection = require('../balcony/section');

const { thickness } = Railing;

const BedroomBalcony = (properties) => [

  <BalconySection offset={[ 0, 16, 19 ]} />,
  <BalconySection offset={[ 4, 16, 19 ]} />,

  <Railing offset={[0, 32 - thickness, 19]} length={8} />,

];

module.exports = BedroomBalcony;
