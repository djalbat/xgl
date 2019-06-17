'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetUtilities = require('../utilities/offset');

const { add3, subtract2, scale2 } = vectorMaths,
      { DELTA_SCALAR, OFFSET_SCALAR, INITIAL_MOUSE_COORDINATES } = constants,
      { calculateXAngleOffset, calculateYAngleOffset, calculateZAngleOffset } = offsetUtilities;

class Location {
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

  updateXYOffset(tilt) {
    const xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffset),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffset);

    this.offset = add3(add3(this.previousOffset, yAngleOffset), xAngleOffset);
  }

  updateZOffset(tilt, delta) {
    const xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          thirdRelativeOffset = delta * DELTA_SCALAR,
          zAngleOffset = calculateZAngleOffset(xAngle, yAngle, thirdRelativeOffset);

    this.previousOffset = add3(this.previousOffset, zAngleOffset);

    this.updateXYOffset(tilt);
  }

  static fromInitialOffset(initialOffset) {
    const offset = initialOffset, ///
          previousOffset = offset,  ///
          mouseCoordinates = INITIAL_MOUSE_COORDINATES, ///
          previousMouseCoordinates = mouseCoordinates,  ///
          location = new Location(offset, previousOffset, mouseCoordinates, previousMouseCoordinates);

    return location;
  }
}

module.exports = Location;

