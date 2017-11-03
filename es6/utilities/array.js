'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function chop(elements, arrayLength) {
  const arrays = [],
        elementsLength = elements.length,
        arraysLength = elementsLength / arrayLength;

  for (let index = 0; index < arraysLength; index++) {
    const array = [];

    for (let offset = 0; offset < arrayLength; offset++) {
      array[offset] = elements[index * arrayLength + offset];
    }

    arrays[index] = array;
  }

  return arrays;
}

function permute(elements, places) {
  const length = elements.length,
        cut = length - places,
        leadingElements = elements.slice(0, cut),
        trailingElements = elements.slice(cut);

  elements = [...trailingElements, ...leadingElements];

  return elements;
}

function flatten(arrays) {
  return arrays.reduce(function(elements, array) {
    return elements.concat(array);
  }, []);
}

function guarantee(arrayOrElement) {
  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
             [arrayOrElement];
}

module.exports = Object.assign(arrayUtilities, {
  chop: chop,
  permute: permute,
  flatten: flatten,
  guarantee: guarantee
});
