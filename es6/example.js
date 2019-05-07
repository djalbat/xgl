'use strict';

const cubesExample = require('./example/cubes'),
      simpleExample = require('./example/simple');

const example = window.location.search.substring(1);

switch (example) {
  case 'cubes':
    cubesExample();
    break;

  case 'simple':
    simpleExample();
    break;
}
