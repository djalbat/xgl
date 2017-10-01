'use strict';

const AngleCoordinates = require('./coordinates2D'),  ///
      MouseCoordinates = require('./mouseCoordinates');

const INITIAL_MOUSE_COORDINATES = new MouseCoordinates(0, 0),
      INITIAL_ANGLE_COORDINATES = new AngleCoordinates(0, Math.PI / 2);

class Angles {
  constructor(mouseDown, offsetMouseCoordinates, angleCoordinates, previousAngleCoordinates) {
    this.mouseDown = mouseDown;
    this.offsetMouseCoordinates = offsetMouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  getXAxisAngle() {
    const xAxisAngle = -this.angleCoordinates.getY(); ///

    return xAxisAngle;
  }

  getYAxisAngle() {
    const yAxisAngle = +this.angleCoordinates.getX(); ///

    return yAxisAngle;
  }
  
  mouseUpEventHandler(mouseCoordinates) {
    this.mouseDown = false;
    this.previousAngleCoordinates = this.angleCoordinates;
  }

  mouseDownEventHandler(mouseCoordinates) {
    this.mouseDown = true;
    this.offsetMouseCoordinates = mouseCoordinates;
  }

  mouseMoveEventHandler(mouseCoordinates) {
    if (this.mouseDown) {
      this.updateAngleCoordinates(mouseCoordinates);
    }
  }

  updateAngleCoordinates(mouseCoordinates) {
    const relativeMouseCoordinates = mouseCoordinates.minus(this.offsetMouseCoordinates),
          relativeAngleCoordinates = relativeMouseCoordinates.multipliedBy(Math.PI / 180);  ///

    this.angleCoordinates = this.previousAngleCoordinates.plus(relativeAngleCoordinates);
  }

  static fromNothing() {
    const mouseDown = false,
          offsetMouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          angles = new Angles(mouseDown, offsetMouseCoordinates, angleCoordinates, previousAngleCoordinates);

    return angles;
  }
}

const angles = Angles.fromNothing();

module.exports = angles;
