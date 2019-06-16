'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array');

const { first, second } = arrayUtilities,
      { add2, scale2, subtract2 } = vectorMaths,
      { ANGLES_SCALAR, INITIAL_ANGLES, INITIAL_MOUSE_COORDINATES } = constants;

class Tilt {
  constructor(angles, previousAngles, mouseCoordinates, previousMouseCoordinates) {
    this.angles = angles;
    this.previousAngles = previousAngles;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  getXAngle() {
    const secondAngle = second(this.angles),
          xAngle = secondAngle; ///

    return xAngle;
  }
  
  getYAngle() {
    const firstAngle = first(this.angles),
          yAngle = -firstAngle; ///

    return yAngle;
  }

  getZAngle() {
    const zAngle = 0;

    return zAngle;
  }
  
  getAngles() { ///
    const xAngle = this.getXAngle(),
          yAngle = this.getYAngle(),
          zAngle = this.getZAngle(),
          angles = [
            xAngle,
            yAngle,
            zAngle
          ];
    
    return angles;
  }
  
  setMouseCoordinates(mouseCoordinates) {
    this.mouseCoordinates = mouseCoordinates;
  }

  updatePreviousAngles() {
    this.previousAngles = this.angles;
  }

  updatePreviousMouseCoordinates() {
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  updateAngles() {
    const scalar = ANGLES_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngles = scale2(relativeMouseCoordinates, scalar);

    this.angles = add2(this.previousAngles, relativeAngles);
  }

  static fromNothing() {
    const angles = INITIAL_ANGLES,  ///
          previousAngles = angles,  ///
          mouseCoordinates = INITIAL_MOUSE_COORDINATES, ///
          previousMouseCoordinates = mouseCoordinates,  ///
          tilt = new Tilt(angles, previousAngles, mouseCoordinates, previousMouseCoordinates);

    return tilt;
  }
}

module.exports = Tilt;
