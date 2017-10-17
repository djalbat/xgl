'use strict';

const Railing = require('../balcony/railing'),
      BalconySection = require('../balcony/section');

const { thickness } = Railing;

const BedroomBalcony = (properties) => [

  <BalconySection offset={[ 0, 19, 0 ]} />,
  <BalconySection offset={[ 4, 19, 0 ]} />,

  <Railing offset={[         0, 19, 0 ]} length={8} />,
  <Railing offset={[ thickness, 19, 0 ]} length={16} rotations={[ 0, -90, 0 ]}/>,

];

module.exports = BedroomBalcony;
