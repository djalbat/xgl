'use strict';

const React = require('../../../react'),
      BalconySection = require('../balcony/section');

const BedroomBalcony = (properties) => {

  return ([

    <BalconySection offset={[ 0, 16, 19 ]} />,
    <BalconySection offset={[ 4, 16, 19 ]} />,

  ]);
};

module.exports = BedroomBalcony;
