"use strict";

import { first, second } from "../utilities/array";
import { add3, transform3 } from "../maths/vector";
import { ANGLES_SCALAR, DEGREES_TO_RADIANS_SCALAR } from "../constants";

class Tilt {
  constructor(angles, flipped) {
    this.angles = angles;
    this.flipped = flipped;
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
  
  updateAngles(relativeMouseCoordinates) {
    const scalar = this.flipped ?
                     +ANGLES_SCALAR :
                       -ANGLES_SCALAR,
          matrix = [

                  0, scalar, 0,
            -scalar,      0, 0,
                  0,      0, 0,

          ],
          relativeAngles = transform3([ ...relativeMouseCoordinates, 0 ], matrix);  ///

    this.angles = add3(this.angles, relativeAngles);
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
          tilt = new Tilt(angles, flipped);

    return tilt;
  }
}

module.exports = Tilt;
