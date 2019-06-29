'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      offsetsUtilities = require('../utilities/offsets');

const { OFFSET_SCALAR } = constants,
      { relativeOffsetsFromAnglesAndDirections } = offsetsUtilities,
      { zero2, add3, scale2, reflect2, subtract2 } = vectorMaths;

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
    const angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          directions = [ ...scaledReflectedRelativeMouseCoordinates, 0, 0 ],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

    this.offsets = add3(this.previousOffsets, relativeOffsets);
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
