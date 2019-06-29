'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetsUtilities = require('../utilities/offsets');

const { relativeOffsetsFromAnglesAndDirections } = offsetsUtilities,
      { DELTA_SCALAR, INVERT_SCALAR, OFFSET_SCALAR } = constants,
      { zero2, add3, scale2, reflect2, scale3, subtract2 } = vectorMaths;

class Pan {
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

  updateXYOffset(tilt) {
    const angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          directions = [ ...scaledReflectedRelativeMouseCoordinates, 0, 0 ],
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

  static fromInitialOffsets(initialOffsets) {
    const offsets = initialOffsets, ///
          mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,  ///
          pan = new Pan(offsets, mouseCoordinates, previousMouseCoordinates);

    return pan;
  }

  static fromInitialPosition(initialPosition) {
    const scalar = INVERT_SCALAR, ///
          offsets = scale3(initialPosition, scalar),
          mouseCoordinates = null,  ///
          previousMouseCoordinates = null,  ///
          pan = new Pan(offsets, mouseCoordinates, previousMouseCoordinates);
    
    return pan;
  }
}

module.exports = Pan;
