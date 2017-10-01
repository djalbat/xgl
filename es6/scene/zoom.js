'use strict';

const INITIAL_DISTANCE = 50;
    
class Zoom {
  constructor(distance) {
    this.distance = distance;
  }

  getDistance() {
    return this.distance;
  }

  mouseWheelEventHandler(delta) {
    this.distance += delta;
  }
  
  static fromNothing() {
    const distance = INITIAL_DISTANCE,
          zoom = new Zoom(distance);
    
    return zoom;
  }
}

const zoom = Zoom.fromNothing();

module.exports = zoom;
