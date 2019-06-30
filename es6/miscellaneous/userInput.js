'use strict';

const KeyEvents = require('./keyEvents'),
      MouseEvents = require('./mouseEvents'),
      vectorMaths = require('../maths/vector');

const { zero2, subtract2 } = vectorMaths;

class UserInput {
  constructor(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
    this.handlers = handlers;
    this.keyEvents = keyEvents;
    this.mouseEvents = mouseEvents;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
    this.previousMouseCoordinates = this.mouseCoordinates;  ///

    this.mouseCoordinates = mouseCoordinates;

    if (this.previousMouseCoordinates === null) {
      return;
    }

    if (mouseDown) {
      const mouseWheelDelta = 0,  ///
            shiftKeyDown = this.keyEvents.isShiftKeyDown(),
            relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates);

      this.handlers.forEach((handler) => handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown));
    }
  }

  mouseWheelHandler(mouseWheelDelta, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown(),
          relativeMouseCoordinates = zero2();

    this.handlers.forEach((handler) => handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown));
  }

  addUserInputHandler(userInputHandler) {
    const handler = userInputHandler; ///

    this.handlers.push(handler);
  }

  initialise(canvas) {
    const mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

    this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);

    this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
  }

  static fromNothing(canvas) {
    const handlers = [],
          keyEvents = KeyEvents.fromNothing(canvas),
          mouseEvents = MouseEvents.fromNothing(canvas),
          mouseCoordinates = null,  ///
          previousMouseCoordinates = null,  ///
          userInput = new UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);

    userInput.initialise(canvas);

    return userInput;
  }
}

module.exports = UserInput;
