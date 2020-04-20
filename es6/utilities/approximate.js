"use strict";

const constants = require("../constants");

const { DEFAULT_MARGIN_OF_ERROR } = constants;

function isApproximatelyEqualToOne(value, marginOfError = DEFAULT_MARGIN_OF_ERROR) { return isApproximatelyEqualTo(value, 1, marginOfError); }

function isApproximatelyEqualToZero(value, marginOfError = DEFAULT_MARGIN_OF_ERROR) { return isApproximatelyEqualTo(value, 0, marginOfError); }

module.exports = {
  isApproximatelyEqualToOne,
  isApproximatelyEqualToZero
};

function isApproximatelyEqualTo(valueA, valueB, marginOfError = DEFAULT_MARGIN_OF_ERROR) {
  const difference = valueA - valueB,
        absoluteDifference = Math.abs(difference),
        approximatelyEqual = (absoluteDifference < marginOfError);

  return approximatelyEqual;
}
