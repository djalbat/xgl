'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function divide(data, divisor) {
  const arrays = [],
        dataLength = data.length,
        arraysLength = dataLength / divisor;

  for (let i = 0; i < arraysLength; i++) {
    const array = [],
          offset = i * divisor;

    for (let j = 0; j < divisor; j++) {
      array[j] = data[j + offset];
    }

    arrays[i] = array;
  }

  return arrays;
}

function flatten(arrays) {
  const data = arrays.reduce(function(data, array) {
    data = data.concat(array);

    return data;
  }, []);

  return data;
}

module.exports = Object.assign(arrayUtilities, {
  divide: divide,
  flatten: flatten
});