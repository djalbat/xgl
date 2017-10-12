'use strict';

const constants = require('../constants');

const { MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL } = constants;

class MouseEvents {
  constructor(canvas, handlersMap) {
    this.canvas = canvas;

    this.handlersMap = handlersMap;

    addMouseEventHandler(canvas, 'mouseup', function(event) { this.onMouseEvent(MOUSE_UP, event) }.bind(this) );
    addMouseEventHandler(canvas, 'mousedown', function(event) { this.onMouseEvent(MOUSE_DOWN, event) }.bind(this) );
    addMouseEventHandler(canvas, 'mousemove', function(event) { this.onMouseEvent(MOUSE_MOVE, event) }.bind(this) );
    addMouseEventHandler(canvas, 'mousewheel', function(event) { this.onMouseWheelEvent(event) }.bind(this) );
  }

  addMouseUpHandler(mouseUpHandler) {
    this.addHandler(MOUSE_UP, mouseUpHandler);
  }

  addMouseDownHandler(mouseDownHandler) {
    this.addHandler(MOUSE_DOWN, mouseDownHandler);
  }

  addMouseMoveHandler(mouseMoveHandler) {
    this.addHandler(MOUSE_MOVE, mouseMoveHandler);
  }

  addMouseWheelHandler(mouseWheelHandler) {
    this.addHandler(MOUSE_WHEEL, mouseWheelHandler);
  }

  addHandler(eventType, handler) {
    const handlers = this.handlersMap[eventType];

    handlers.push(handler);
  }

  onMouseEvent(eventType, event) {
    const handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

    handlers.forEach(function(handler) {
      handler(mouseCoordinates);
    });
  }

  onMouseWheelEvent(event) {
    const handlers = this.handlersMap[MOUSE_WHEEL],
          delta = deltaFromEvent(event);

    handlers.forEach(function(handler) {
      handler(delta);
    });
  }

  static fromNothing(canvas) {
    const handlersMap = {
            MOUSE_UP: [],
            MOUSE_DOWN: [],
            MOUSE_MOVE: [],
            MOUSE_WHEEL: []
          },
          mouseEvents = new MouseEvents(canvas, handlersMap);

    return mouseEvents;
  }
}

module.exports = MouseEvents;

function addMouseEventHandler(canvas, type, handler) {
  const domElement = canvas.getDOMElement();

  domElement.addEventListener(type, function(event) {
    event.preventDefault();

    handler(event);
  });
}

function deltaFromEvent(event) {
  const delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return delta;
}

function mouseCoordinatesFromEvent(event, canvas) {
  const domElement = canvas.getDOMElement(),
        domElementBoundingClientRect = domElement.getBoundingClientRect(),
        mouseCoordinates = [
          +(event.clientX - domElementBoundingClientRect.left),
          -(event.clientY - domElementBoundingClientRect.top)
        ];

  return mouseCoordinates;
}
