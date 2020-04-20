"use strict";

import { add3, scale2, reflect2, scale3 } from "../maths/vector";
import { relativeOffsetsFromAnglesAndDirections } from "../utilities/offsets";
import { DELTA_SCALAR, INVERT_SCALAR, OFFSET_SCALAR } from "../constants";

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
