'use strict';

const cubeExample = require('./example/cube'),
      simpleExample = require('./example/simple'),
      maskingExample = require('./example/masking'),
      pyramidExample = require('./example/pyramid'),
      temporaryExample = require('./example/temporary');

const example = window.location.search.substring(1);  ///

switch (example) {
  case 'temporary':
    temporaryExample();
    break;

  case 'simple':
    simpleExample();
    break;

  case 'cube':
    cubeExample();
    break;

  case 'masking':
    maskingExample();
    break;

  case 'pyramid':
    pyramidExample();
    break;
}
