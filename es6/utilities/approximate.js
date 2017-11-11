'use strict';

const constants = require('../constants');

const { DEFAULT_MARGIN_OF_ERROR } = constants;

function areApproximatelyEqual(valueA, valueB, marginOfError = DEFAULT_MARGIN_OF_ERROR) {
  const difference = valueA - valueB,
        absoluteDifference = Math.abs(difference),
        approximatelyEqual = (absoluteDifference < marginOfError);

  return approximatelyEqual;
}

function isApproximatelyEqualToZero(value, marginOfError = DEFAULT_MARGIN_OF_ERROR) { return areApproximatelyEqual(value, 0, marginOfError); }

module.exports = {
  areApproximatelyEqual: areApproximatelyEqual,
  isApproximatelyEqualToZero: isApproximatelyEqualToZero
};
