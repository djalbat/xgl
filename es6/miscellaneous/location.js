'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetsUtilities = require('../utilities/offsets');

const { relativeOffsetsFromAnglesAndDirections } = offsetsUtilities,
      { add3, scale2, reflect2, scale3, subtract2 } = vectorMaths,
      { DELTA_SCALAR, INVERT_SCALAR, OFFSET_SCALAR } = constants;

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
    const angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR, ///
          relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          reflectedScaledRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          directions = [ ...reflectedScaledRelativeMouseCoordinates, 0, 0],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

    this.offsets = add3(this.offsets, relativeOffsets);
  }

  updateZOffset(delta, tilt) {
    const angles = tilt.getAngles(),
          scalar = DELTA_SCALAR, ///
          scaledDelta = delta * scalar,
          directions = [ 0, 0, scaledDelta, 0 ],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

    this.offsets = add3(this.offsets, relativeOffsets);
  }

  static fromInitialPosition(initialPosition) {
    const scalar = INVERT_SCALAR, ///
          offsets = scale3(initialPosition, scalar),
          mouseCoordinates = null,  ///
          previousMouseCoordinates = null,  ///
          location = new Location(offsets, mouseCoordinates, previousMouseCoordinates);
    
    return location;
  }
}

module.exports = Location;
