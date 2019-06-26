'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      matrixUtilities = require('../utilities/matrix');

const { rotationsMatrixFromAngles } = matrixUtilities,
      { DELTA_SCALAR, INVERT_SCALAR, OFFSET_SCALAR } = constants,
      { add3, scale2, reflect2, scale3, reflect3, subtract2, transform4 } = vectorMaths;

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
          reverseOrder = true,
          relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          reflectedScaledRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles, reverseOrder),
          relativeOffsets = transform4([ ...reflectedScaledRelativeMouseCoordinates, 0, 0], rotationsMatrix).slice(0, 3); ///

    this.offsets = add3(this.offsets, relativeOffsets);
  }

  updateZOffset(delta, tilt) {
    const angles = tilt.getAngles(),
          scalar = DELTA_SCALAR, ///
          reverseOrder = true,
          scaledDelta = delta * scalar,
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles, reverseOrder),
          relativeOffsets = transform4([ 0, 0, scaledDelta, 0 ], rotationsMatrix).slice(0, 3); ///

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
