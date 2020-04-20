"use strict";

import { SHIFT_KEY_CODE } from "../constants";

class KeyEvents {
  constructor(handlers, shiftKeyDown) {
    this.handlers = handlers;
    this.shiftKeyDown = shiftKeyDown;
  }

  isShiftKeyDown() {
    return this.shiftKeyDown;
  }

  keyUpEventListener(event) {
    const { keyCode } = event;

    if (keyCode === SHIFT_KEY_CODE) {
      this.shiftKeyDown = false;

      this.handlers.forEach((handler) => handler(this.shiftKeyDown));
    }
  }

  keyDownEventListener(event) {
    const { keyCode } = event;

    if (keyCode === SHIFT_KEY_CODE) {
      this.shiftKeyDown = true;

      this.handlers.forEach((handler) => handler(this.shiftKeyDown));
    }
  }

  addShiftKeyHandler(shiftKeyHandler) {
    const handler = shiftKeyHandler;  ///

    this.handlers.push(handler);
  }

  initialise(canvas) {
    const documentDOMElement = document.documentElement,  ///
          keyUpEventListener = this.keyUpEventListener.bind(this),
          keyDownEventListener = this.keyDownEventListener.bind(this);

    documentDOMElement.addEventListener("keyup", keyUpEventListener);

    documentDOMElement.addEventListener("keydown", keyDownEventListener);
  }

  static fromNothing() {
    const handlers = [],
          shiftKeyDown = false,  ///
          keyEvents = new KeyEvents(handlers, shiftKeyDown);

    return keyEvents;
  }
}

module.exports = KeyEvents;
