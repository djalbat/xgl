"use strict";

import { INVERT_MULTIPLIER } from "../constants";
import { add3, scale2, reflect2, scale3 } from "../maths/vector";
import { relativeOffsetsFromAnglesAndDirections } from "../utilities/offsets";

export default class Pan {
  constructor(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
    this.offsets = offsets;
    this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
    this.relativeMouseCoordinatesMultiplier = relativeMouseCoordinatesMultiplier;
  }

  getOffsets() {
    return this.offsets;
  }

  getDeltaMultiplier() {
    return this.mouseWheelDeltaMultiplier;
  }

  getRelativeMouseCoordinatesMultiplier() {
    return this.relativeMouseCoordinatesMultiplier;
  }

  updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
    mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier; ///

    relativeMouseCoordinates = scale2(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier); ///

    const angles = tilt.getAngles(),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, 1)),
          directions = [ ...scaledReflectedRelativeMouseCoordinates, mouseWheelDelta, 0 ],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions, 1);

    this.offsets = add3(this.offsets, relativeOffsets);
  }

  magnify(magnification) {
    this.offsets = this.offsets * magnification;
    this.mouseWheelDeltaMultiplier = this.mouseWheelDeltaMultiplier * magnification;
    this.relativeMouseCoordinatesMultiplier = this.relativeMouseCoordinatesMultiplier * magnification;
  }

  static fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
    const offsets = initialOffsets, ///
          pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);

    return pan;
  }

  static fromInitialPositionMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialPosition, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
    const offsets = scale3(initialPosition, INVERT_MULTIPLIER),
          pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
    
    return pan;
  }
}
