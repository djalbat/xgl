"use strict";

import { ANGLES_MULTIPLIER } from "../constants";
import { add2, scale2, transform2 } from "../maths/vector";

export default class Tilt {
  constructor(angles, clockwise) {
    this.angles = angles;
    this.clockwise = clockwise;
  }

  getAngles() {
    return this.angles;
  }

  isClockwise() {
    return this.clockwise;
  }

  updateAngles(relativeMouseCoordinates) {
    relativeMouseCoordinates = scale2(relativeMouseCoordinates, ANGLES_MULTIPLIER); ///

    const multiplier = this.clockwise ?
                        +1 :
                          -1,
          matrix = [

            0,           +multiplier,
            -multiplier,           0,

          ],
          relativeAngles = transform2(relativeMouseCoordinates, matrix);

    this.angles = add2(this.angles, relativeAngles);
  }

  static fromInitialAngles(initialAngles) {
    const angles = initialAngles, ///
          clockwise = false,
          tilt = new Tilt(angles, clockwise);

    return tilt;
  }

  static fromInitialAnglesAndClockwise(initialAngles, clockwise) {
    const angles = initialAngles, ///
          tilt = new Tilt(angles, clockwise);

    return tilt;
  }
}
