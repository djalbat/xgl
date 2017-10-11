'use strict';

const constants = require('../constants');

const { MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL } = constants;

class MouseEvents {
  constructor(canvas, handlers) {
    this.canvas = canvas;
    this.handlers = handlers;

    this.addEventHandler(canvas, 'mouseup', function(event) { this.onMouseEvent(MOUSE_UP, event) }.bind(this) );
    this.addEventHandler(canvas, 'mousedown', function(event) { this.onMouseEvent(MOUSE_DOWN, event) }.bind(this) );
    this.addEventHandler(canvas, 'mousemove', function(event) { this.onMouseEvent(MOUSE_MOVE, event) }.bind(this) );
    this.addEventHandler(canvas, 'mousewheel', function(event) { this.onMouseWheelEvent(event) }.bind(this) );
  }

  addMouseUpEventHandler(mouseUpEventHandler) {
    this.addMouseEventHandler(MOUSE_UP, mouseUpEventHandler);
  }

  addMouseDownEventHandler(mouseDownEventHandler) {
    this.addMouseEventHandler(MOUSE_DOWN, mouseDownEventHandler);
  }

  addMouseMoveEventHandler(mouseMoveEventHandler) {
    this.addMouseEventHandler(MOUSE_MOVE, mouseMoveEventHandler);
  }

  addMouseWheelEventHandler(mouseWheelEventHandler) {
    this.addMouseEventHandler(MOUSE_WHEEL, mouseWheelEventHandler);
  }

  addMouseEventHandler(mouseEventType, mouseEventHandler) {
    const mouseEventHandlers = this.handlers[mouseEventType];

    mouseEventHandlers.push(mouseEventHandler);
  }

  addEventHandler(canvas, type, handler) {
    const domElement = canvas.getDOMElement();

    domElement.addEventListener(type, function(event) {
      event.preventDefault();

      handler(event);
    });
  }

  onMouseEvent(mouseEventType, event) {
    const mouseEventHandlers = this.handlers[mouseEventType],
          mouseCoordinates = this.canvas.mouseCoordinatesFromEvent(event);

    mouseEventHandlers.forEach(function(mouseEventHandler) {
      mouseEventHandler(mouseCoordinates);
    });
  }

  onMouseWheelEvent(event) {
    const mouseWheelEventType = MOUSE_WHEEL,
          mouseWheelEventHandlers = this.handlers[mouseWheelEventType],
          delta = deltaFromEvent(event);

    mouseWheelEventHandlers.forEach(function(mouseWheelEventHandler) {
      mouseWheelEventHandler(delta);
    });
  }

  static fromNothing(canvas) {
    const handlers = {
            MOUSE_UP: [],
            MOUSE_DOWN: [],
            MOUSE_MOVE: [],
            MOUSE_WHEEL: []
          },
          mouseEvents = new MouseEvents(canvas, handlers);

    return mouseEvents;
  }
}

module.exports = MouseEvents;

function deltaFromEvent(event) {
  const delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return delta;
}
