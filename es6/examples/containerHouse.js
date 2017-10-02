'use strict';

const React = require('../react'),
      example = require('../example'),
      Foundations = require('./containerHouse/foundations');

function containerHouse() {
  example(() =>

    <Foundations />

  );
}

module.exports = containerHouse;
