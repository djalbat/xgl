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

function dilute(elements, array, test) {
  elements.forEach(function(element, index) {
    const passed = test(element, index);

    if (passed) {
      array.push(element);
    }
  });
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

module.exports = Object.assign(arrayUtilities, {
  chop: chop,
  dilute: dilute,
  permute: permute,
  flatten: flatten  
});
