"use strict";

import { ANGLES_MULTIPLIER } from "../constants";
import { add3, scale2, transform3 } from "../maths/vector";

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

                      0, +multiplier, 0,
            -multiplier,           0, 0,
                      0,           0, 0

          ],
          relativeAngles = transform3([ ...relativeMouseCoordinates, 0 ], matrix);

    this.angles = add3(this.angles, relativeAngles);
  }

  static fromInitialAngles(initialAngles) {
    const angles = [ ...initialAngles, 0 ],
          clockwise = false,
          tilt = new Tilt(angles, clockwise);

    return tilt;
  }

  static fromInitialAnglesAndClockwise(initialAngles, clockwise) {
    const angles = [ ...initialAngles, 0 ],
          tilt = new Tilt(angles, clockwise);

    return tilt;
  }
}
