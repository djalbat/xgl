'use strict';

const BalconySection = require('../balcony/section');

const BedroomBalcony = (properties) => [

  <BalconySection offset={[ 0, 16, 19 ]} />,
  <BalconySection offset={[ 4, 16, 19 ]} />,

];

module.exports = BedroomBalcony;
