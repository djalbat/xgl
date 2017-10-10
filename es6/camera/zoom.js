'use strict';

const constants = require('../constants');

const { MINIMUM_DISTANCE } = constants; 

class Zoom {
  constructor(distance) {
    this.distance = distance;
  }

  getDistance() {
    return this.distance;
  }

  mouseWheelEventHandler(delta) {
    this.distance += delta * 5;  ///

    this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
  }
  
  static fromInitialPosition(initialPosition) {
    const initialDistance = -initialPosition[2], ///
          distance = initialDistance,
          zoom = new Zoom(distance);
    
    return zoom;
  }
}

module.exports = Zoom;
