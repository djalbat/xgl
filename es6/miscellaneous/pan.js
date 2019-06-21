'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetUtilities = require('../utilities/offset');

const { OFFSET_SCALAR } = constants,
      { zero2, add3, subtract2, scale2 } = vectorMaths,
      { calculateXAngleOffset, calculateYAngleOffset } = offsetUtilities;

class Pan {
  constructor(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates) {
    this.offsets = offsets;
    this.previousOffsets = previousOffsets;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  getOffsets() {
    return this.offsets;
  }

  setMouseCoordinates(mouseCoordinates) {
    this.mouseCoordinates = mouseCoordinates;
  }

  resetPreviousMouseCoordinates() {
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  resetPreviousOffsets() {
    this.previousOffsets = this.offsets;
  }

  updateOffset(tilt) {
    const xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates);

    this.offsets = add3(add3(this.previousOffsets, yAngleOffset), xAngleOffset);  ///
  }

  static fromInitialOffsets(initialOffsets) {
    const offsets = initialOffsets, ///
          previousOffsets = offsets,  ///
          mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,  ///
          pan = new Pan(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates);
    
    return pan;
  }
}

module.exports = Pan;
