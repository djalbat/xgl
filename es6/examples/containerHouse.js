'use strict';

const React = require('../react'),
      example = require('../example'),
      Foundations = require('./containerHouse/foundations');

function containerHouse() {
  example(function() {
    const elements = [

            <Foundations />
        
          ];

    return elements;
  });
}

module.exports = containerHouse;
