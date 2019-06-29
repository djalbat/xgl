'use strict';

const constants = require('../constants');

const { SHIFT_KEY_CODE } = constants;

class KeyEvents {
  constructor(shiftKeyDown, shiftKeyHandlers) {
    this.shiftKeyDown = shiftKeyDown;
    this.shiftKeyHandlers = shiftKeyHandlers;
  }

  isShiftKeyDown() {
    return this.shiftKeyDown;
  }

  keyUpEventListener(event) {
    const { keyCode } = event;

    if (keyCode === SHIFT_KEY_CODE) {
      this.shiftKeyDown = false;

      this.shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(this.shiftKeyDown));
    }
  }

  keyDownEventListener(event) {
    const { keyCode } = event;

    if (keyCode === SHIFT_KEY_CODE) {
      this.shiftKeyDown = true;

      this.shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(this.shiftKeyDown));
    }
  }

  addShiftKeyHandler(shiftKeyHandler) {
    this.shiftKeyHandlers.push(shiftKeyHandler);
  }

  initialise() {
    const documentDOMElement = document.documentElement,  ///
          keyUpEventListener = this.keyUpEventListener.bind(this),
          keyDownEventListener = this.keyDownEventListener.bind(this);

    documentDOMElement.addEventListener('keyup', keyUpEventListener);

    documentDOMElement.addEventListener('keydown', keyDownEventListener);
  }

  static fromNothing(canvas) {
    const shiftKeyDown = false,  ///
          shiftKeyHandlers = [],
          keyEvents = new KeyEvents(shiftKeyDown, shiftKeyHandlers);

    keyEvents.initialise();

    return keyEvents;
  }
}

module.exports = KeyEvents;
