"use strict";

import { MINIMUM_DISTANCE } from "../constants";

export default class Zoom {
  constructor(distance, deltaMultiplier) {
    this.distance = distance;
    this.deltaMultiplier = deltaMultiplier;
  }

  getDistance() {
    return this.distance;
  }

  getDeltaMultiplier() {
    return this.deltaMultiplier;
  }

  updateDistance(mouseWheelDelta) {
    this.distance -= mouseWheelDelta * this.deltaMultiplier;

    this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
  }
  
  static fromInitialDistanceAndDeltaMultiplier(initialDistance, deltaMultiplier) {
    const distance = initialDistance, ///
          zoom = new Zoom(distance, deltaMultiplier);
    
    return zoom;
  }
}
