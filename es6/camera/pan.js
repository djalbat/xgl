'use strict';

const necessary = require('necessary');

const vec2 = require('../maths/vec2'),
      vec3 = require('../maths/vec3'),
      constants = require('../constants');

const { arrayUtilities } = necessary,
      { first, second } = arrayUtilities,
      { add } = vec3,
      { subtract, scale } = vec2,
      { OFFSET_SCALAR, INITIAL_MOUSE_COORDINATES } = constants;

class Pan {
  constructor(mouseDown, shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    this.mouseDown = mouseDown;
    this.shiftKeyDown = shiftKeyDown;
    this.offset = offset;
    this.previousOffset = previousOffset;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  getOffset() {
    return this.offset;
  }

  mouseUpHandler() {
    this.mouseDown = false;
    this.previousMouseCoordinates = this.mouseCoordinates;
  }

  mouseDownHandler() {
    this.mouseDown = true;
    this.previousOffset = this.offset;

    if (this.shiftKeyDown) {
      this.previousMouseCoordinates = this.mouseCoordinates;
      this.previousOffset = this.offset;
    }
  }

  mouseMoveHandler(mouseCoordinates, angles) {
    this.mouseCoordinates = mouseCoordinates;

    if (this.mouseDown && this.shiftKeyDown) {
      this.updateOffset(angles);
    }
  }

  shiftKeyHandler(shiftKeyDown) {
    this.shiftKeyDown = shiftKeyDown;

    if (this.shiftKeyDown) {
      this.previousMouseCoordinates = this.mouseCoordinates;
      this.previousOffset = this.offset;
    }
  }

  updateOffset(angles) {
    const xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          scalar = OFFSET_SCALAR,
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale(relativeMouseCoordinates, scalar),
          firstRelativeOffset = first(relativeOffset),
          secondRelativeOffset = second(relativeOffset);

    let offset = this.previousOffset.slice();

    (function() {
      const x = -Math.cos(yAngle) * firstRelativeOffset,
            y = 0,
            z = -Math.sin(yAngle) * firstRelativeOffset;

      offset = add(offset, [x, y, z]);
    })();

    (function() {
      const x = -Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffset,
            y = -Math.cos(xAngle) * secondRelativeOffset,
            z = +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffset;

      offset = add(offset, [x, y, z]);
    })();

    this.offset = offset;
  }

  static fromInitialOffset(initialOffset) {
    const offset = initialOffset,
          mouseDown = false,
          shiftKeyDown = false,
          previousOffset = offset,  ///
          mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          previousMouseCoordinates = mouseCoordinates,
          pan = new Pan(mouseDown, shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates);
    
    return pan;
  }
}

module.exports = Pan;
