"use strict";

import { add3, scale2, reflect2, scale3 } from "../maths/vector";
import { INVERT_MULTIPLIER, OFFSET_MULTIPLIER } from "../constants";
import { relativeOffsetsFromAnglesAndDirections } from "../utilities/offsets";

export default class Pan {
  constructor(offsets, deltaMultiplier) {
    this.offsets = offsets;
    this.deltaMultiplier = deltaMultiplier;
  }

  getOffsets() {
    return this.offsets;
  }

  getDeltaMultiplier() {
    return this.deltaMultiplier;
  }

  updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
    const angles = tilt.getAngles(),
          scaledMouseWheelDelta = mouseWheelDelta * this.deltaMultiplier,
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, OFFSET_MULTIPLIER)),
          directions = [ ...scaledReflectedRelativeMouseCoordinates, scaledMouseWheelDelta, 0 ],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

    this.offsets = add3(this.offsets, relativeOffsets);
  }

  static fromInitialOffsetsAndDeltaMultiplier(initialOffsets, deltaMultiplier) {
    const offsets = initialOffsets, ///
          pan = new Pan(offsets, deltaMultiplier);

    return pan;
  }

  static fromInitialPositionAndDeltaMultiplier(initialPosition, deltaMultiplier) {
    const offsets = scale3(initialPosition, INVERT_MULTIPLIER),
          pan = new Pan(offsets, deltaMultiplier);
    
    return pan;
  }
}
