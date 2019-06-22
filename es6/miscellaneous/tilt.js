'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array');

const { first, second } = arrayUtilities,
      { zero2, add2, scale2, subtract2 } = vectorMaths,
      { ANGLES_SCALAR, DEGREES_TO_RADIANS } = constants;

class Tilt {
  constructor(flipped, angles, previousAngles, mouseCoordinates, previousMouseCoordinates) {
    this.flipped = flipped;
    this.angles = angles;
    this.previousAngles = previousAngles;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  getXAngle() {
    const secondAngle = second(this.angles),
          xAngle = this.flipped ?
                    -secondAngle :
                      secondAngle;

    return xAngle;
  }
  
  getYAngle() {
    const firstAngle = first(this.angles),
          yAngle = this.flipped ?
                     firstAngle :
                      -firstAngle;

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

  resetPreviousMouseCoordinates() {
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  resetPreviousAngles() {
    this.previousAngles = this.angles;
  }

  updateAngles() {
    const scalar = ANGLES_SCALAR, ///
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar);

    this.angles = add2(this.previousAngles, scaledRelativeMouseCoordinates);
  }

  static fromInitialAnglesAndFlipped(initialAngles, flipped) {
    const scalar = flipped ?
                    -DEGREES_TO_RADIANS :
                      +DEGREES_TO_RADIANS,
          angles = scale2(initialAngles, scalar),
          previousAngles = angles,  ///
          mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,  ///
          tilt = new Tilt(flipped, angles, previousAngles, mouseCoordinates, previousMouseCoordinates);

    return tilt;
  }
}

module.exports = Tilt;
