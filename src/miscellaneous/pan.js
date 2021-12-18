"use strict";

import { add3, scale2, reflect2 } from "../maths/vector";
import { relativeOffsetsFromAnglesAndDirections } from "../utilities/offsets";
import { MOUSE_WHEEL_DELTA_MULTIPLIER, RELATIVE_MOUSE_COORDINATES_MULTIPLIER } from "../constants";

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

  static fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity) {
    const offsets = initialOffsets, ///
          mouseWheelDeltaMultiplier = MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity,
          relativeMouseCoordinatesMultiplier = RELATIVE_MOUSE_COORDINATES_MULTIPLIER * mouseSensitivity,
          pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);

    return pan;
  }
}
