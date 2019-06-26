'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      matrixUtilities = require('../utilities/matrix');

const { OFFSET_SCALAR } = constants,
      { rotationsMatrixFromAngles } = matrixUtilities,
      { zero2, add3, scale2, reflect2, reflect3, subtract2, transform4 } = vectorMaths;

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
          reverseOrder = true,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles, reverseOrder),
          relativeOffsets = transform4([ ...scaledReflectedRelativeMouseCoordinates, 0, 0 ], rotationsMatrix).slice(0, 3); ///

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
