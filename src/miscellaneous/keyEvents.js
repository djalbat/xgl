"use strict";

import { keyCodes } from "necessary";

import { KEYUP_EVENT_TYPE, KEYDOWN_EVENT_TYPE } from "../eventTypes";

const { ESCAPE_KEY_CODE, SHIFT_KEY_CODE } = keyCodes;

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

  addEscapeKeyDownHandler(escapeKeyDownHandler) {
    const documentDOMElement = document.documentElement;  ///

    documentDOMElement.addEventListener(KEYDOWN_EVENT_TYPE, (event) => {
      const { keyCode } = event;

      if (keyCode === ESCAPE_KEY_CODE) {
        escapeKeyDownHandler();
      }
    });
  }

  initialise() {
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
