'use strict';

const Railing = require('../balcony/railing'),
      BalconySection = require('../balcony/section');

const { thickness } = Railing;

const BedroomBalcony = (properties) => [

  <BalconySection position={[ 0, 19, 0 ]} />,
  <BalconySection position={[ 4, 19, 0 ]} />,

  <Railing position={[         0, 19, 0 ]} length={8} />,
  <Railing position={[ thickness, 19, 0 ]} length={16} rotations={[ 0, -90, 0 ]}/>,

];

module.exports = BedroomBalcony;
