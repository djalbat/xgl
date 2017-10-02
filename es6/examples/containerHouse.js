'use strict';

const React = require('../react'),
      example = require('../example'),
      Frame = require('./containerHouse/frame'),
      Foundations = require('./containerHouse/foundations'),
      arrayUtilities = require('../utilities/array');

const { flatten } = arrayUtilities;

function containerHouse() {
  example(() => flatten([

    <Foundations />,
    <Frame />

  ]));
}

module.exports = containerHouse;
