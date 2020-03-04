'use strict';

const cubeExample = require('./example/cube'),
      simpleExample = require('./example/simple'),
      maskingExample = require('./example/masking'),
      pyramidExample = require('./example/pyramid'),
      tilingExample = require('./example/tiling');

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

  case 'pyramid':
    pyramidExample();
    break;

  case 'tiling':
    tilingExample();
    break;
}