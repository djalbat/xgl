"use strict";

import { MINIMUM_DISTANCE, MOUSE_WHEEL_DELTA_MULTIPLIER } from "../constants";

export default class Zoom {
  constructor(distance, minimumDistance, mouseWheelDeltaMultiplier) {
    this.distance = distance;
    this.minimumDistance = minimumDistance;
    this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
  }

  getDistance() {
    return this.distance;
  }

  getMinimumDistance() {
    return this.minimumDistance;
  }

  getDeltaMultiplier() {
    return this.mouseWheelDeltaMultiplier;
  }

  updateDistance(mouseWheelDelta) {
    mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier; ///

    this.distance = this.distance - mouseWheelDelta;

    this.distance = Math.max(this.minimumDistance, this.distance);
  }

  static fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity) {
    const distance = initialDistance, ///
          minimumDistance = MINIMUM_DISTANCE,
          mouseWheelDeltaMultiplier = MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity,
          zoom = new Zoom(distance, minimumDistance, mouseWheelDeltaMultiplier);

    return zoom;
  }
}
