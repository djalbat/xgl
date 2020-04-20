"use strict";

const constants = require("../constants"),
      vectorMaths = require("../maths/vector"),
      offsetsUtilities = require("../utilities/offsets");

const { add3, scale2, reflect2, scale3 } = vectorMaths,
      { relativeOffsetsFromAnglesAndDirections } = offsetsUtilities,
      { DELTA_SCALAR, INVERT_SCALAR, OFFSET_SCALAR } = constants;

class Pan {
  constructor(offsets) {
    this.offsets = offsets;
  }

  getOffsets() {
    return this.offsets;
  }

  updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
    const angles = tilt.getAngles(),
          scaledMouseWheelDelta = mouseWheelDelta * DELTA_SCALAR,
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, OFFSET_SCALAR)),
          directions = [ ...scaledReflectedRelativeMouseCoordinates, scaledMouseWheelDelta, 0 ],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

    this.offsets = add3(this.offsets, relativeOffsets);
  }

  static fromInitialOffsets(initialOffsets) {
    const offsets = initialOffsets, ///
          pan = new Pan(offsets);

    return pan;
  }

  static fromInitialPosition(initialPosition) {
    const offsets = scale3(initialPosition, INVERT_SCALAR),
          pan = new Pan(offsets);
    
    return pan;
  }
}

module.exports = Pan;
