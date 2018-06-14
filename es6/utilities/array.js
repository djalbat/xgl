'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function permute(array, places) {
  const length = array.length,
        cut = length - places,
        leadingElements = array.slice(0, cut),
        trailingElements = array.slice(cut);

  array = [...trailingElements, ...leadingElements];

  return array;
}

function flatten(arrays) {
  return arrays.reduce(function(elements, array) {
    return elements.concat(array);
  }, []);
}

module.exports = Object.assign(arrayUtilities, {
  permute,
  flatten
});
