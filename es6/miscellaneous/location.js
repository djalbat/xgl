'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetUtilities = require('../utilities/offset');

const { DELTA_SCALAR, OFFSET_SCALAR } = constants,
      { zero2, add3, subtract2, scale2 } = vectorMaths,
      { calculateXAngleOffset, calculateYAngleOffset, calculateZAngleOffset } = offsetUtilities;

class Location {
  constructor(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates, scaledRelativeMouseCoordinates) {
    this.offsets = offsets;
    this.previousOffsets = previousOffsets;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
    this.scaledRelativeMouseCoordinates = scaledRelativeMouseCoordinates;
  }

  getOffsets() {
    return this.offsets;
  }

  setMouseCoordinates(mouseCoordinates) {
    this.mouseCoordinates = mouseCoordinates;
  }

  resetScaledRelativeMouseCoordinates() {
    this.scaledRelativeMouseCoordinates = zero2();
  }

  resetPreviousMouseCoordinates() {
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  resetPreviousOffsets() {
    this.previousOffsets = this.offsets;
  }

  updateXYOffset(tilt) {
    const xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates);

    this.scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar);

    const yAngleOffset = calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates);

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
          mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,  ///
          scaledRelativeMouseCoordinates = zero2(),
          location = new Location(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates, scaledRelativeMouseCoordinates);
    
    return location;
  }
}

module.exports = Location;
