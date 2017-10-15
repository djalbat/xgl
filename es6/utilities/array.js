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
  flatten: flatten,
  guarantee: guarantee
});
