'use strict';

const Element = require('../element');

class Camera extends Element {
  constructor(updateHandler, pan, tilt) {
    super();

    this.updateHandler = updateHandler;

    this.pan = pan;

    this.tilt = tilt;
  }

  getPan() {
    return this.pan;
  }

  getTilt() {
    return this.tilt;
  }

  getUpdateHandler() {
    return this.updateHandler;
  }

  onUpdate(updateHandler) {
    this.updateHandler = updateHandler;
  }

  forceUpdate(canvas) {
    this.update(canvas);
  }

  userInputUpdate(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas) {
    if (false) {
      ///
    } else if (shiftKeyDown) {
      this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
    } else if (mouseWheelDelta !== 0) {
      this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
    } else {
      this.tilt.updateAngles(relativeMouseCoordinates);
    }

    this.update(canvas);
  }

  render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    ///
  }

  initialise(canvas) {
    ///
  }

  parentContext() {
	  const onUpdate = this.onUpdate.bind(this),
				  forceUpdate = this.forceUpdate.bind(this),
          userInputUpdate = this.userInputUpdate.bind(this);

    return ({
      onUpdate,
      forceUpdate,
      userInputUpdate
    });
  }
  
  static fromProperties(Class, properties, ...remainingArguments) {
    const updateHandler = null, ///
          camera = Element.fromProperties(Class, properties, updateHandler, ...remainingArguments);

    return camera;
  }
}

module.exports = Camera;
