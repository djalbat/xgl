'use strict';

const constants = require('../constants');

const { SHIFT_KEY_CODE } = constants;

class KeyEvents {
  constructor(handlersMap, shiftKeyDown) {
    this.handlersMap = handlersMap;
    this.shiftKeyDown = shiftKeyDown;
  }

  isShiftKeyDown() {
    return this.shiftKeyDown;
  }

  keyUpEventListener(event) {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case SHIFT_KEY_CODE :
        this.shiftKeyUpEventListener();
        break;
    }
  }

  keyDownEventListener(event) {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case SHIFT_KEY_CODE :
        this.shiftKeyDownEventListener();
        break;
    }
  }
  
  shiftKeyUpEventListener() {
    this.shiftKeyDown = false;

    const shiftKeyHandlers = this.handlersMap[ SHIFT_KEY_CODE ];

    shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(this.shiftKeyDown));
  }

  shiftKeyDownEventListener() {
    this.shiftKeyDown = true;

    const shiftKeyHandlers = this.handlersMap[ SHIFT_KEY_CODE ];

    shiftKeyHandlers.forEach((shiftKeyHandler) => shiftKeyHandler(this.shiftKeyDown));
  }

  addShiftKeyHandler(shiftKeyHandler) {
    const shiftKeyHandlers = this.handlersMap[ SHIFT_KEY_CODE ];

    shiftKeyHandlers.push(shiftKeyHandler);
  }

  static fromNothing(canvas) {
    const handlersMap = {};
    
    handlersMap[ SHIFT_KEY_CODE ] = [];

    const shiftKeyDown = false,  ///
          keyEvents = new KeyEvents(handlersMap, shiftKeyDown),
          keyUpEventListener = keyEvents.keyUpEventListener.bind(keyEvents),
          keyDownEventListener = keyEvents.keyDownEventListener.bind(keyEvents),
          documentDOMElement = document.documentElement;  ///

    documentDOMElement.addEventListener('keyup', keyUpEventListener);
    documentDOMElement.addEventListener('keydown', keyDownEventListener);

    return keyEvents;
  }
}

module.exports = KeyEvents;
