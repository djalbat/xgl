'use strict';

const necessary = require('necessary');

const vec2 = require('../maths/vec2'),
      constants = require('../constants');

const { arrayUtilities } = necessary,
      { first, second } = arrayUtilities,
      { add, subtract, scale } = vec2,
      { ANGLE_COORDINATES_SCALAR, INITIAL_MOUSE_COORDINATES, INITIAL_ANGLE_COORDINATES } = constants;

class Angles {
  constructor(mouseDown, mouseCoordinates, angleCoordinates, previousAngleCoordinates) {
    this.mouseDown = mouseDown;
    this.mouseCoordinates = mouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  getXAngle() {
    const secondAngleCoordinate = second(this.angleCoordinates),
          xAngle = -secondAngleCoordinate; ///

    return xAngle;
  }
  
  getYAngle() {
    const yAngle = 0; ///
    
    return yAngle;
  }

  getZAngle() {
    const firstAngleCoordinate = first(this.angleCoordinates),
          zAngle = +firstAngleCoordinate; ///

    return zAngle;
  }
  
  mouseUpEventHandler(mouseCoordinates) {
    this.mouseDown = false;
    this.previousAngleCoordinates = this.angleCoordinates;
  }

  mouseDownEventHandler(mouseCoordinates) {
    this.mouseDown = true;
    this.mouseCoordinates = mouseCoordinates;
  }

  mouseMoveEventHandler(mouseCoordinates) {
    if (this.mouseDown) {
      this.updateAngleCoordinates(mouseCoordinates);
    }
  }

  updateAngleCoordinates(mouseCoordinates) {
    const scalar = ANGLE_COORDINATES_SCALAR,
          relativeMouseCoordinates = subtract(mouseCoordinates, this.mouseCoordinates),
          relativeAngleCoordinates = scale(relativeMouseCoordinates, scalar);

    this.angleCoordinates = add(this.previousAngleCoordinates, relativeAngleCoordinates);
  }

  static fromNothing() {
    const mouseDown = false,
          mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          angles = new Angles(mouseDown, mouseCoordinates, angleCoordinates, previousAngleCoordinates);

    return angles;
  }
}

const angles = Angles.fromNothing();

module.exports = angles;
