'use strict';

const constants = require('../constants');

const { CTRL_KEY_CODE, SHIFT_KEY_CODE } = constants;

class KeyEvents {
  constructor(handlersMap) {
    this.handlersMap = handlersMap;
  }

  keyUpHandler(event) {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case CTRL_KEY_CODE :
        this.ctrlKeyUpHandler();
        break;

      case SHIFT_KEY_CODE :
        this.shiftKeyUpHandler();
        break;
    }
  }

  keyDownHandler(event) {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case CTRL_KEY_CODE :
        this.ctrlKeyDownHandler();
        break;

      case SHIFT_KEY_CODE :
        this.shiftKeyDownHandler();
        break;
    }
  }
  
  ctrlKeyUpHandler() {
    const ctrlKeyDown = false,
          ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

    ctrlKeyHandlers.forEach((ctrlKeyHandler) => ctrlKeyHandler(ctrlKeyDown));
  }

  shiftKeyUpHandler() {
    const shiftKeyDown = false,
          shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

    shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(shiftKeyDown));
  }

  ctrlKeyDownHandler() {
    const ctrlKeyDown = true,
          ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

    ctrlKeyHandlers.forEach((ctrlKeyHandler) => ctrlKeyHandler(ctrlKeyDown));
  }

  shiftKeyDownHandler() {
    const shiftKeyDown = true,
          shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

    shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(shiftKeyDown));
  }

  addCtrlKeyHandler(ctrlKeyHandler) {
    const ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

    ctrlKeyHandlers.push(ctrlKeyHandler);
  }

  addShiftKeyHandler(shiftKeyHandler) {
    const shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

    shiftKeyHandlers.push(shiftKeyHandler);
  }

  static fromNothing(canvas) {
    const handlersMap = {};
    
    handlersMap[ CTRL_KEY_CODE ] = [];
    handlersMap[ SHIFT_KEY_CODE ] = [];

    const keyEvents = new KeyEvents(handlersMap),
          keyUpHandler = keyEvents.keyUpHandler.bind(keyEvents),
          keyDownHandler = keyEvents.keyDownHandler.bind(keyEvents),
          documentDOMElement = document.documentElement;  ///

    documentDOMElement.addEventListener('keyup', keyUpHandler);
    documentDOMElement.addEventListener('keydown', keyDownHandler);

    return keyEvents;
  }
}

module.exports = KeyEvents;
