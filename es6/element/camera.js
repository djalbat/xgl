'use strict';

const Element = require('../element'),
      KeyEvents = require('../miscellaneous/keyEvents'),
      MouseEvents = require('../miscellaneous/mouseEvents');

class Camera extends Element {
  constructor(keyEvents, mouseEvents, updateHandler, pan, tilt) {
    super();

    this.keyEvents = keyEvents;
    this.mouseEvents = mouseEvents;
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

  shiftKeyHandler(shiftKeyDown) {
    if (shiftKeyDown) {
      this.pan.resetPreviousMouseCoordinates();
    } else {
      this.tilt.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousAngles();
    }
  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
    this.tilt.resetPreviousAngles();
  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
    this.pan.resetPreviousMouseCoordinates();

    this.tilt.resetPreviousMouseCoordinates();
  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    this.pan.resetPreviousMouseCoordinates();

    this.pan.setMouseCoordinates(mouseCoordinates);

    this.tilt.setMouseCoordinates(mouseCoordinates);

    if (mouseDown) {
      if (shiftKeyDown) {
        this.pan.updateXYOffset(this.tilt);
      } else {
        this.tilt.updateAngles();
      }

      this.update(canvas);
    }
  }

  forceUpdate(canvas) {
    this.update(canvas);
  }

  onUpdate(updateHandler) {
    this.updateHandler = updateHandler;
  }

  update(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    this.updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    ///
  }

  initialise(canvas) {
    const keyEvents = KeyEvents.fromNothing(canvas),
          mouseEvents = MouseEvents.fromNothing(canvas),
          shiftKeyHandler = this.shiftKeyHandler.bind(this),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

    keyEvents.addShiftKeyHandler(shiftKeyHandler);

    mouseEvents.addMouseUpHandler(mouseUpHandler);
    mouseEvents.addMouseDownHandler(mouseDownHandler);
    mouseEvents.addMouseMoveHandler(mouseMoveHandler);
    mouseEvents.addMouseWheelHandler(mouseWheelHandler);

    this.keyEvents = keyEvents;

    this.mouseEvents = mouseEvents;
  }

  parentContext() {
	  const onUpdate = this.onUpdate.bind(this),
				  forceUpdate = this.forceUpdate.bind(this);

    return ({
      onUpdate,
      forceUpdate
    });
  }
  
  static fromProperties(Class, properties, ...remainingArguments) {
    const keyEvents = null, ///
          mouseEvents = null, ///
          updateHandler = null, ///
          camera = Element.fromProperties(Class, properties, keyEvents, mouseEvents, updateHandler, ...remainingArguments);

    return camera;
  }
}

module.exports = Camera;
