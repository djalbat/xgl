'use strict';

const constants = require('../constants');

const { CTRL_KEY_CODE, SHIFT_KEY_CODE } = constants;

class KeyEvents {
  constructor(handlers) {
    this.handlers = handlers;
  }
  
  onCtrlKeyUp() {
    const ctrlKeyDown = false,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

    ctrlKeyHandlers.forEach((ctrlKeyHandler) => ctrlKeyHandler(ctrlKeyDown));
  }

  onShiftKeyUp() {
    const shiftKeyDown = false,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

    shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(shiftKeyDown));
  }

  onCtrlKeyDown() {
    const ctrlKeyDown = true,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

    ctrlKeyHandlers.forEach((ctrlKeyHandler) => ctrlKeyHandler(ctrlKeyDown));
  }

  onShiftKeyDown() {
    const shiftKeyDown = true,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

    shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(shiftKeyDown));
  }

  addCtrlKeyHandler(ctrlKeyHandler) {
    const ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

    ctrlKeyHandlers.push(ctrlKeyHandler);
  }

  addShiftKeyHandler(shiftKeyHandler) {
    const shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

    shiftKeyHandlers.push(shiftKeyHandler);
  }

  static fromNothing() {
    const handlers = {},
          keyEvents = new KeyEvents(handlers);
    
    handlers[CTRL_KEY_CODE] = [];
    handlers[SHIFT_KEY_CODE] = [];

    return keyEvents;
  }
}

const keyEvents = KeyEvents.fromNothing(),
      documentDOMElement = document.documentElement;

documentDOMElement.onkeyup = (event) => {
  const keyCode = event.keyCode;

  if (false) {
    ///
  } else if (keyCode === CTRL_KEY_CODE) {
    keyEvents.onCtrlKeyUp();
  } else if (keyCode === SHIFT_KEY_CODE) {
    keyEvents.onShiftKeyUp();
  }
};

documentDOMElement.onkeydown = (event) => {
  const keyCode = event.keyCode;

  if (false) {
    ///
  } else if (keyCode === CTRL_KEY_CODE) {
    keyEvents.onCtrlKeyDown();
  } else if (keyCode === SHIFT_KEY_CODE) {
    keyEvents.onShiftKeyDown();
  }
};

module.exports = keyEvents;
