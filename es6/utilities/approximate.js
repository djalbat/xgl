'use strict';

const constants = require('../constants');

const { DEFAULT_MARGIN_OF_ERROR } = constants;

function isApproximatelyEqualTo(valueA, valueB, marginOfError = DEFAULT_MARGIN_OF_ERROR) {
  const difference = valueA - valueB,
        absoluteDifference = Math.abs(difference),
        approximatelyEqual = (absoluteDifference < marginOfError);

  return approximatelyEqual;
}

function isApproximatelyEqualToZero(value, marginOfError = DEFAULT_MARGIN_OF_ERROR) { return isApproximatelyEqualTo(value, 0, marginOfError); }

module.exports = {
  isApproximatelyEqualTo: isApproximatelyEqualTo,
  isApproximatelyEqualToZero: isApproximatelyEqualToZero
};
