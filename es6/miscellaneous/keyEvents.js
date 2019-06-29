'use strict';

const constants = require('../constants');

const { CTRL_KEY_CODE, SHIFT_KEY_CODE } = constants;

class KeyEvents {
  constructor(handlersMap, ctrlKeyDown, shiftKeyDown) {
    this.handlersMap = handlersMap;
    this.ctrlKeyDown = ctrlKeyDown;
    this.shiftKeyDown = shiftKeyDown;
  }

  isCtrlKeyDown() {
    return this.ctrlKeyDown;
  }

  isShiftKeyDown() {
    return this.shiftKeyDown;
  }

  keyUpEventListener(event) {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case CTRL_KEY_CODE :
        this.ctrlKeyUpEventListener();
        break;

      case SHIFT_KEY_CODE :
        this.shiftKeyUpEventListener();
        break;
    }
  }

  keyDownEventListener(event) {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case CTRL_KEY_CODE :
        this.ctrlKeyDownEventListener();
        break;

      case SHIFT_KEY_CODE :
        this.shiftKeyDownEventListener();
        break;
    }
  }
  
  ctrlKeyUpEventListener() {
    this.ctrlKeyDown = false;

    const ctrlKeyHandlers = this.handlersMap[ CTRL_KEY_CODE ];

    ctrlKeyHandlers.forEach((ctrlKeyHandler) => ctrlKeyHandler(this.ctrlKeyDown));
  }

  shiftKeyUpEventListener() {
    this.shiftKeyDown = false;

    const shiftKeyHandlers = this.handlersMap[ SHIFT_KEY_CODE ];

    shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(this.shiftKeyDown));
  }

  ctrlKeyDownEventListener() {
    this.ctrlKeyDown = true;

    const ctrlKeyHandlers = this.handlersMap[ CTRL_KEY_CODE ];

    ctrlKeyHandlers.forEach((ctrlKeyHandler) => ctrlKeyHandler(this.ctrlKeyDown));
  }

  shiftKeyDownEventListener() {
    this.shiftKeyDown = true;

    const shiftKeyHandlers = this.handlersMap[ SHIFT_KEY_CODE ];

    shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(this.shiftKeyDown));
  }

  addCtrlKeyHandler(ctrlKeyHandler) {
    const ctrlKeyHandlers = this.handlersMap[ CTRL_KEY_CODE ];

    ctrlKeyHandlers.push(ctrlKeyHandler);
  }

  addShiftKeyHandler(shiftKeyHandler) {
    const shiftKeyHandlers = this.handlersMap[ SHIFT_KEY_CODE ];

    shiftKeyHandlers.push(shiftKeyHandler);
  }

  static fromNothing(canvas) {
    const handlersMap = {};
    
    handlersMap[ CTRL_KEY_CODE ] = [];
    handlersMap[ SHIFT_KEY_CODE ] = [];

    const ctrlKeyDown = false,  ///
          shiftKeyDown = false,  ///
          keyEvents = new KeyEvents(handlersMap, ctrlKeyDown, shiftKeyDown),
          keyUpEventListener = keyEvents.keyUpEventListener.bind(keyEvents),
          keyDownEventListener = keyEvents.keyDownEventListener.bind(keyEvents),
          documentDOMElement = document.documentElement;  ///

    documentDOMElement.addEventListener('keyup', keyUpEventListener);
    documentDOMElement.addEventListener('keydown', keyDownEventListener);

    return keyEvents;
  }
}

module.exports = KeyEvents;
