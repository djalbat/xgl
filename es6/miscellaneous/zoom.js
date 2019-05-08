'use strict';

const constants = require('../constants');

const { DISTANCE_SCALAR, MINIMUM_DISTANCE } = constants; 

class Zoom {
  constructor(distance) {
    this.distance = distance;
  }

  getDistance() {
    return this.distance;
  }

  mouseWheelEventHandler(delta) {
    const scalar = DISTANCE_SCALAR;
    
    this.distance -= delta * scalar;

    this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
  }
  
  static fromInitialDistance(initialDistance) {
    const distance = initialDistance, ///
          zoom = new Zoom(distance);
    
    return zoom;
  }
}

module.exports = Zoom;
