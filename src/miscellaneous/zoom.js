"use strict";

import { MINIMUM_DISTANCE } from "../constants";

export default class Zoom {
  constructor(distance, minimumDistance, deltaMultiplier) {
    this.distance = distance;
    this.minimumDistance = minimumDistance;
    this.deltaMultiplier = deltaMultiplier;
  }

  getDistance() {
    return this.distance;
  }

  getMinimumDistance() {
    return this.minimumDistance;
  }

  getDeltaMultiplier() {
    return this.deltaMultiplier;
  }

  updateDistance(mouseWheelDelta) {
    this.distance = this.distance - (mouseWheelDelta * this.deltaMultiplier);

    this.distance = Math.max(this.minimumDistance, this.distance);
  }

  magnify(magnification) {
    this.distance = this.distance * magnification;
    this.minimumDistance = this.minimumDistance * magnification;
    this.deltaMultiplier = this.deltaMultiplier * magnification;
  }

  static fromInitialDistanceAndDeltaMultiplier(initialDistance, deltaMultiplier) {
    const distance = initialDistance, ///
          minimumDistance = MINIMUM_DISTANCE,
          zoom = new Zoom(distance, minimumDistance, deltaMultiplier);
    
    return zoom;
  }
}
