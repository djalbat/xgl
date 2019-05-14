'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array');

const { first, second } = arrayUtilities,
      { add3, subtract3, scale3 } = vectorMaths,
      { ANGLE_COORDINATES_SCALAR, INITIAL_MOUSE_COORDINATES, INITIAL_ANGLE_COORDINATES } = constants;

class Tilt {
  constructor(mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates) {
    this.mouseCoordinates = mouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  getXAngle() {
    const secondAngleCoordinate = second(this.angleCoordinates),
          xAngle = secondAngleCoordinate; ///

    return xAngle;
  }
  
  getYAngle() {
    const firstAngleCoordinate = first(this.angleCoordinates),
          yAngle = -firstAngleCoordinate; ///

    return yAngle;
  }

  getZAngle() {
    const zAngle = 0;

    return zAngle;
  }
  
  getAngles() {
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
  
  mouseUpHandler() {
    this.previousAngleCoordinates = this.angleCoordinates;
  }

  mouseDownHandler() {
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  mouseMoveHandler(mouseCoordinates, mouseDown, shiftKeyDown) {
    this.mouseCoordinates = mouseCoordinates;

    if (mouseDown && !shiftKeyDown) {
      this.updateAngleCoordinates();
    }
  }

  shiftKeyHandler(shiftKeyDown) {
    if (!shiftKeyDown) {
      this.previousMouseCoordinates = this.mouseCoordinates;

      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }

  updateAngleCoordinates() {
    const scalar = ANGLE_COORDINATES_SCALAR,
          relativeMouseCoordinates = subtract3(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngleCoordinates = scale3(relativeMouseCoordinates, scalar);

    this.angleCoordinates = add3(this.previousAngleCoordinates, relativeAngleCoordinates);
  }

  static fromNothing() {
    const mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,  ///
          previousMouseCoordinates = mouseCoordinates,  ///
          tilt = new Tilt(mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates);

    return tilt;
  }
}

module.exports = Tilt;
