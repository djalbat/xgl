'use strict';

const React = require('../../../react'),
      BalconySection = require('../balcony/section');

const MainBalcony = (properties) => {

  return ([

    <BalconySection offset={[ 40,  0, 19 ]} />,
    <BalconySection offset={[ 44,  0, 19 ]} />,
    <BalconySection offset={[ 40, 16, 19 ]} />,
    <BalconySection offset={[ 44, 16, 19 ]} />,
    <BalconySection offset={[ 36, 16, 19 ]} />,
    <BalconySection offset={[ 32, 16, 19 ]} />,
    <BalconySection offset={[ 28, 16, 19 ]} />,

  ]);
};

module.exports = MainBalcony;
