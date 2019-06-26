'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetUtilities = require('../utilities/offset');

const { add3, subtract2, scale2, scale3 } = vectorMaths,
      { DELTA_SCALAR, OFFSET_SCALAR } = constants,
      { calculateXAngleOffset, calculateYAngleOffset, calculateZAngleOffset } = offsetUtilities;

class Location {
  constructor(offsets, mouseCoordinates, previousMouseCoordinates) {
    this.offsets = offsets;

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

  updateXYOffset(mouseCoordinates, tilt) {
    const relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR, ///
          relativeOffsets = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffsets),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffsets);

    this.offsets = add3(add3(this.offsets, yAngleOffset), xAngleOffset);
  }

  updateZOffset(delta, tilt) {
    const xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = DELTA_SCALAR, ///
          thirdRelativeOffset = delta * scalar,
          zAngleOffset = calculateZAngleOffset(xAngle, yAngle, thirdRelativeOffset);

    this.offsets = add3(this.offsets, zAngleOffset);
  }

  static fromInitialPosition(initialPosition) {
    const offsets = scale3(initialPosition, -1),
          mouseCoordinates = null,  ///
          previousMouseCoordinates = null,  ///
          location = new Location(offsets, mouseCoordinates, previousMouseCoordinates);
    
    return location;
  }
}

module.exports = Location;
