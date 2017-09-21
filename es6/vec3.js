'use strict';

function add(array1, array2) {
  const array = array1.map(function(value1, index) {
    const value2 = array2[index],
          value = value1 + value2;

    return value;
  });

  return array;
}

module.exports = {
  add: add
};
