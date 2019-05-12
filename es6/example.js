'use strict';

const cubeExample = require('./example/cube'),
      simpleExample = require('./example/simple');

const example = window.location.search.substring(1);

switch (example) {
  case 'cube':
    cubeExample();
    break;

  case 'simple':
    simpleExample();
    break;
}
