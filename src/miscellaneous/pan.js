"use strict";

import { add3, scale2, reflect2, scale3 } from "../maths/vector";
import { INVERT_MULTIPLIER, OFFSET_MULTIPLIER } from "../constants";
import { relativeOffsetsFromAnglesDirectionsAndMagnification } from "../utilities/offsets";

export default class Pan {
  constructor(offsets, magnification, deltaMultiplier) {
    this.offsets = offsets;
    this.magnification = magnification;
    this.deltaMultiplier = deltaMultiplier;
  }

  getOffsets() {
    return this.offsets;
  }

  getMagnification() {
    return this.magnification();
  }

  getDeltaMultiplier() {
    return this.deltaMultiplier;
  }

  updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
    const angles = tilt.getAngles(),
          magnification = this.magnification,
          scaledMouseWheelDelta = mouseWheelDelta * this.deltaMultiplier,
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, OFFSET_MULTIPLIER)),
          directions = [ ...scaledReflectedRelativeMouseCoordinates, scaledMouseWheelDelta, 0 ],
          relativeOffsets = relativeOffsetsFromAnglesDirectionsAndMagnification(angles, directions, magnification);

    this.offsets = add3(this.offsets, relativeOffsets);
  }

  magnify(magnification) {
    this.magnification = magnification;

    this.offsets = scale3(this.offsets, magnification);
  }

  static fromInitialOffsetsAndDeltaMultiplier(initialOffsets, deltaMultiplier) {
    const offsets = initialOffsets, ///
          magnification = null, //
          pan = new Pan(offsets, magnification, deltaMultiplier);

    return pan;
  }

  static fromInitialPositionAndDeltaMultiplier(initialPosition, deltaMultiplier) {
    const offsets = scale3(initialPosition, INVERT_MULTIPLIER),
          magnification = null, //
          pan = new Pan(offsets, magnification, deltaMultiplier);
    
    return pan;
  }
}
