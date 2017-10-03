'use strict';

const React = require('./react');

Object.defineProperty(window, 'React', {
  get: function() {
    return React;
  }
});

module.exports = React;
