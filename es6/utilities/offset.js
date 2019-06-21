'use strict';

const arrayUtilities = require('../utilities/array');

const { first, second } = arrayUtilities;

function calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates) {
  const secondScaledRelativeMouseCoordinate = second(scaledRelativeMouseCoordinates),
        xAngleOffset = [
          -Math.sin(yAngle) * Math.sin(xAngle) * secondScaledRelativeMouseCoordinate,
                            - Math.cos(xAngle) * secondScaledRelativeMouseCoordinate,
          +Math.cos(yAngle) * Math.sin(xAngle) * secondScaledRelativeMouseCoordinate
        ];

  return xAngleOffset;
}

function calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates) {
  const firstScaledRelativeMouseCoordinate = first(scaledRelativeMouseCoordinates),
        yAngleOffset = [
          -Math.cos(yAngle) * firstScaledRelativeMouseCoordinate,
          +0,
          -Math.sin(yAngle) * firstScaledRelativeMouseCoordinate
        ];

  return yAngleOffset;
}

function calculateZAngleOffset(xAngle, yAngle, thirdScaledRelativeMouseCoordinate) {
  const zAngleOffset = [
          -Math.sin(yAngle) * Math.cos(xAngle) * thirdScaledRelativeMouseCoordinate,
                              Math.sin(xAngle) * thirdScaledRelativeMouseCoordinate,
          +Math.cos(yAngle) * Math.cos(xAngle) * thirdScaledRelativeMouseCoordinate
        ];

  return zAngleOffset;
}

module.exports = {
  calculateXAngleOffset,
  calculateYAngleOffset,
  calculateZAngleOffset
};
