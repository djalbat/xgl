'use strict';

const React = require('../../../react'),
      BalconySection = require('../balconySection');

const MainBalcony = (properties) => [

  <BalconySection offset={[40, 0,18.5]} />,
  <BalconySection offset={[40,16,18.5]} />,
  <BalconySection offset={[32,16,18.5]} />,
  <BalconySection offset={[28,16,18.5]} narrow />,

];

module.exports = MainBalcony;
