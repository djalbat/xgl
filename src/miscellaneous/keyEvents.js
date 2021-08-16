"use strict";

import { SHIFT_KEY_CODE } from "../keyCodes";
import { KEYUP_EVENT_TYPE, KEYDOWN_EVENT_TYPE } from "../eventTypes";

export default class KeyEvents {
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

    documentDOMElement.addEventListener(KEYUP_EVENT_TYPE, keyUpEventListener);

    documentDOMElement.addEventListener(KEYDOWN_EVENT_TYPE, keyDownEventListener);
  }

  static fromNothing() {
    const handlers = [],
          shiftKeyDown = false,  ///
          keyEvents = new KeyEvents(handlers, shiftKeyDown);

    return keyEvents;
  }
}
