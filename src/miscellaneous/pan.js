"use strict";

import { add3, scale2, scale3, reflect2 } from "../maths/vector";
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

  updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles) {
    mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier; ///

    relativeMouseCoordinates = scale2(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier); ///

    const scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, 1)),
          directions = [ ...scaledReflectedRelativeMouseCoordinates, mouseWheelDelta, 0 ],
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions, 1);

    this.offsets = add3(this.offsets, relativeOffsets);
  }

  static fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
    const offsets = initialOffsets, ///
          pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);

    return pan;
  }
}
