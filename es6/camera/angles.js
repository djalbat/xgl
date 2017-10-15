'use strict';

const necessary = require('necessary');

const vec2 = require('../maths/vec2'),
      constants = require('../constants');

const { arrayUtilities } = necessary,
      { first, second } = arrayUtilities,
      { add, subtract, scale } = vec2,
      { ANGLE_COORDINATES_SCALAR, INITIAL_MOUSE_COORDINATES, INITIAL_ANGLE_COORDINATES } = constants;

class Angles {
  constructor(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates) {
    this.mouseDown = mouseDown;
    this.shiftKeyDown = shiftKeyDown;
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
  
  mouseUpHandler() {
    this.mouseDown = false;
    this.previousAngleCoordinates = this.angleCoordinates;
  }

  mouseDownHandler() {
    this.mouseDown = true;
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  mouseMoveHandler(mouseCoordinates) {
    this.mouseCoordinates = mouseCoordinates;

    if (this.mouseDown && !this.shiftKeyDown) {
      this.updateAngleCoordinates();
    }
  }

  shiftKeyHandler(shiftKeyDown) {
    this.shiftKeyDown = shiftKeyDown;

    if (!shiftKeyDown) {
      this.previousMouseCoordinates = this.mouseCoordinates;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }

  updateAngleCoordinates() {
    const scalar = ANGLE_COORDINATES_SCALAR,
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngleCoordinates = scale(relativeMouseCoordinates, scalar);

    this.angleCoordinates = add(this.previousAngleCoordinates, relativeAngleCoordinates);
  }

  static fromNothing() {
    const mouseDown = false,
          shiftKeyDown = false,
          mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,  ///
          previousMouseCoordinates = mouseCoordinates,  ///
          angles = new Angles(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates);

    return angles;
  }
}

const angles = Angles.fromNothing();

module.exports = angles;
