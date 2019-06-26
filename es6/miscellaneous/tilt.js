'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array');

const { first, second } = arrayUtilities,
      { zero2, add3, subtract2, transform3 } = vectorMaths,
      { ANGLES_SCALAR, DEGREES_TO_RADIANS_SCALAR } = constants;

class Tilt {
  constructor(flipped, angles, previousAngles, mouseCoordinates, previousMouseCoordinates) {
    this.flipped = flipped;
    this.angles = angles;
    this.previousAngles = previousAngles;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  getXAngle() {
    const firstAngle = first(this.angles),
          xAngle = firstAngle;  ///

    return xAngle;
  }
  
  getYAngle() {
    const secondAngle = second(this.angles),
          yAngle = secondAngle; ///

    return yAngle;
  }

  getZAngle() {
    const zAngle = 0;

    return zAngle;
  }
  
  getAngles() {
    return this.angles;
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
    const scalar = this.flipped ?
                     +ANGLES_SCALAR :
                       -ANGLES_SCALAR,
          matrix = [

                  0, scalar, 0,
            -scalar,      0, 0,
                  0,      0, 0,

          ],
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngles = transform3([ ...relativeMouseCoordinates, 0 ], matrix);  ///

    this.angles = add3(this.previousAngles, relativeAngles);
  }

  static fromInitialAnglesAndFlipped(initialAngles, flipped) {
    const scalar = flipped ?
                     +DEGREES_TO_RADIANS_SCALAR :
                       -DEGREES_TO_RADIANS_SCALAR,
          matrix = [

                  0, scalar, 0,
            -scalar,      0, 0,
                  0,      0, 0,

          ],
          angles = transform3([ ...initialAngles, 0 ], matrix), ///
          previousAngles = angles,  ///
          mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,  ///
          tilt = new Tilt(flipped, angles, previousAngles, mouseCoordinates, previousMouseCoordinates);

    return tilt;
  }
}

module.exports = Tilt;
