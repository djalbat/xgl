'use strict';

const arrayUtilities = require('../utilities/array');

const { first, second } = arrayUtilities;

function calculateXAngleOffset(xAngle, yAngle, relativeOffsets) {
  const secondRelativeOffset = second(relativeOffsets),
        xAngleOffset = [
          -Math.sin(yAngle) * Math.sin(xAngle) * secondRelativeOffset,
                            - Math.cos(xAngle) * secondRelativeOffset,
          +Math.cos(yAngle) * Math.sin(xAngle) * secondRelativeOffset
        ];

  return xAngleOffset;
}

function calculateYAngleOffset(yAngle, relativeOffsets) {
  const firstRelativeOffset = first(relativeOffsets),
        yAngleOffset = [
          -Math.cos(yAngle) * firstRelativeOffset,
          +0,
          -Math.sin(yAngle) * firstRelativeOffset
        ];

  return yAngleOffset;
}

function calculateZAngleOffset(xAngle, yAngle, thirdRelativeOffset) {
  const zAngleOffset = [
          -Math.sin(yAngle) * Math.cos(xAngle) * thirdRelativeOffset,
                              Math.sin(xAngle) * thirdRelativeOffset,
          +Math.cos(yAngle) * Math.cos(xAngle) * thirdRelativeOffset
        ];

  return zAngleOffset;
}

module.exports = {
  calculateXAngleOffset,
  calculateYAngleOffset,
  calculateZAngleOffset
};
