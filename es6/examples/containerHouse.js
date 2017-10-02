'use strict';

const React = require('../react'),
      example = require('../example'),
      arrayUtilities = require('../utilities/array'),
      Frame = require('./containerHouse/frame'),
      FirstFloor = require('./containerHouse/floor/first'),
      ThirdFloor = require('./containerHouse/floor/third'),
      SecondFloor = require('./containerHouse/floor/second'),
      Foundations = require('./containerHouse/foundations');

const { flatten } = arrayUtilities;

function containerHouse() {
  example(() => flatten([

    <Foundations />,
    <FirstFloor />,
    <SecondFloor />,
    <ThirdFloor />,
    <Frame />,

  ]));
}

module.exports = containerHouse;
