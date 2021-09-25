"use strict";

import { MINIMUM_DISTANCE } from "../constants";

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

  static fromInitialDistanceAndMouseWheelDeltaMultiplier(initialDistance, mouseWheelDeltaMultiplier) {
    const distance = initialDistance, ///
          minimumDistance = MINIMUM_DISTANCE,
          zoom = new Zoom(distance, minimumDistance, mouseWheelDeltaMultiplier);
    
    return zoom;
  }
}
