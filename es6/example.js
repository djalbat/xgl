'use strict';

const cubeExample = require('./example/cube'),
      simpleExample = require('./example/simple'),
      maskingExample = require('./example/masking');

const example = window.location.search.substring(1);  ///

switch (example) {
  case 'simple':
    simpleExample();
    break;

  case 'cube':
    cubeExample();
    break;

  case 'masking':
    maskingExample();
    break;
}
