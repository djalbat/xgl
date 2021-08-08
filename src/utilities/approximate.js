"use strict";

import { DEFAULT_MARGIN_OF_ERROR } from "../defaults";

export function isApproximatelyEqualToOne(value, marginOfError = DEFAULT_MARGIN_OF_ERROR) { return isApproximatelyEqualTo(value, 1, marginOfError); }

export function isApproximatelyEqualToZero(value, marginOfError = DEFAULT_MARGIN_OF_ERROR) { return isApproximatelyEqualTo(value, 0, marginOfError); }

function isApproximatelyEqualTo(valueA, valueB, marginOfError = DEFAULT_MARGIN_OF_ERROR) {
  const difference = valueA - valueB,
        absoluteDifference = Math.abs(difference),
        approximatelyEqual = (absoluteDifference < marginOfError);

  return approximatelyEqual;
}
