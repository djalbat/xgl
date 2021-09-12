"use strict";

import { ANGLES_MULTIPLIER } from "../constants";
import { add2, scale2, transform2 } from "../maths/vector";

export default class Tilt {
  constructor(angles) {
    this.angles = angles;
  }

  getAngles() {
    return this.angles;
  }

  getRotatedAngles(clockwise = true) {
    const multiplier = clockwise ?
                         +1 :
                           -1,
          matrix = [

            0,           +multiplier,
            -multiplier,           0,

          ],
          rotatedAngles = transform2(this.angles, matrix); ///

    return rotatedAngles;
  }

  updateAngles(relativeMouseCoordinates) {
    relativeMouseCoordinates = scale2(relativeMouseCoordinates, ANGLES_MULTIPLIER); ///

    const relativeAngles = relativeMouseCoordinates;  ///

    this.angles = add2(this.angles, relativeAngles);
  }

  static fromInitialAngles(initialAngles) {
    const angles = initialAngles, ///
          tilt = new Tilt(angles);

    return tilt;
  }
}
