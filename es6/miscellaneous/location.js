'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetUtilities = require('../utilities/offset');

const { add3, subtract2, scale2 } = vectorMaths,
      { DELTA_SCALAR, OFFSET_SCALAR, INITIAL_MOUSE_COORDINATES } = constants,
      { calculateXAngleOffset, calculateYAngleOffset, calculateZAngleOffset } = offsetUtilities;

class Location {
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

  updatePreviousMouseCoordinates() {
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  updatePreviousOffsets() {
    this.previousOffsets = this.offsets;
  }

  updateXYOffset(tilt) {
    const xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffsets = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffsets),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffsets);

    this.offsets = add3(add3(this.previousOffsets, yAngleOffset), xAngleOffset);  ///
  }

  updateZOffset(delta, tilt) {
    const xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = DELTA_SCALAR, ///
          thirdRelativeOffset = delta * scalar,
          zAngleOffset = calculateZAngleOffset(xAngle, yAngle, thirdRelativeOffset);

    this.previousOffsets = add3(this.previousOffsets, zAngleOffset);

    this.updateXYOffset(tilt);
  }

  static fromInitialOffset(initialOffset) {
    const offsets = initialOffset, ///
          previousOffsets = offsets,  ///
          mouseCoordinates = INITIAL_MOUSE_COORDINATES, ///
          previousMouseCoordinates = mouseCoordinates,  ///
          location = new Location(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates);
    
    return location;
  }
}

module.exports = Location;
