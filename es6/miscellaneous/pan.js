'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array');

const { first, second } = arrayUtilities,
      { add3, subtract2, scale2 } = vectorMaths,
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
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, relativeOffset),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, relativeOffset);

    this.offset = add3(add3(this.previousOffset, yAngleOffset), xAngleOffset);  ///
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

function calculateYAngleOffset(yAngle, relativeOffset) {
  const relativeOffsetComponents = relativeOffset,  ///
        firstRelativeOffsetComponent = first(relativeOffsetComponents),
        x = -Math.cos(yAngle) * firstRelativeOffsetComponent,
        y = 0,
        z = -Math.sin(yAngle) * firstRelativeOffsetComponent,
        yAngleOffset = [x, y, z];

  return yAngleOffset;
}

function calculateXAngleOffset(xAngle, yAngle, relativeOffset) {
  const relativeOffsetComponents = relativeOffset,  ///
        secondRelativeOffsetComponent = second(relativeOffsetComponents),
        x = -Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffsetComponent,
        y = -Math.cos(xAngle) * secondRelativeOffsetComponent,
        z = +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffsetComponent,
        xAngleOffset = [x, y, z];

  return xAngleOffset;
}
