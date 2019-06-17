'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetUtilities = require('../utilities/offset');

const { add3, subtract2, scale2 } = vectorMaths,
      { OFFSET_SCALAR, INITIAL_MOUSE_COORDINATES } = constants,
      { calculateXAngleOffset, calculateYAngleOffset } = offsetUtilities;

class Pan {
  constructor(offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    this.offset = offset;
    this.previousOffset = previousOffset;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  getOffset() {
    return this.offset;
  }

  setMouseCoordinates(mouseCoordinates) {
    this.mouseCoordinates = mouseCoordinates;
  }

  updatePreviousMouseCoordinates() {
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  updatePreviousOffset() {
    this.previousOffset = this.offset;
  }

  updateOffset(tilt) {
    const xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffsets = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffsets),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffsets);

    this.offset = add3(add3(this.previousOffset, yAngleOffset), xAngleOffset);  ///
  }

  static fromInitialOffset(initialOffset) {
    const offset = initialOffset, ///
          previousOffset = offset,  ///
          mouseCoordinates = INITIAL_MOUSE_COORDINATES, ///
          previousMouseCoordinates = mouseCoordinates,  ///
          pan = new Pan(offset, previousOffset, mouseCoordinates, previousMouseCoordinates);
    
    return pan;
  }
}

module.exports = Pan;
