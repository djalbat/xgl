'use strict';

const vec2 = require('../maths/vec2'),
      constants = require('../constants'),
      RotationMatrix = require('../matrix/rotation');

const { add, subtract, scale } = vec2,
      { INITIAL_MOUSE_COORDINATES, OFFSET_SCALAR } = constants;

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
  }

  mouseMoveHandler(mouseCoordinates, angles) {
    this.mouseCoordinates = mouseCoordinates;

    if (this.mouseDown && this.shiftKeyDown) {
      this.updateOffset(angles);
    }
  }

  shiftKeyHandler(shiftKeyDown) {
    this.shiftKeyDown = shiftKeyDown;

    if (shiftKeyDown) {
      this.previousMouseCoordinates = this.mouseCoordinates;
      this.previousOffset = this.offset;
    }
  }

  updateOffset(angles) {
    const scalar = OFFSET_SCALAR,
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          rotationMatrix = RotationMatrix.fromAngles(angles);

    this.offset = add(this.previousOffset, rotationMatrix);

    debugger
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
