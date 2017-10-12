'use strict';

const constants = require('../constants');

const { MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL } = constants;

class MouseEvents {
  constructor(handlersMap) {
    this.handlersMap = handlersMap;
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
          mouseEvents = new MouseEvents(handlersMap),
          domElement = canvas.getDOMElement();

    addMouseEventHandler(domElement, 'mouseup', function(event) { mouseEvents.onMouseEvent(MOUSE_UP, event); });
    addMouseEventHandler(domElement, 'mousedown', function(event) { mouseEvents.onMouseEvent(MOUSE_DOWN, event); });
    addMouseEventHandler(domElement, 'mousemove', function(event) { mouseEvents.onMouseEvent(MOUSE_MOVE, event); });
    addMouseEventHandler(domElement, 'mousewheel', function(event) { mouseEvents.onMouseWheelEvent(event); });

    return mouseEvents;
  }
}

module.exports = MouseEvents;

function deltaFromEvent(event) {
  const delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return delta;
}

function mouseCoordinatesFromEvent(event) {
  const domElement = event.target,  ///
        domElementBoundingClientRect = domElement.getBoundingClientRect(),
        mouseCoordinates = [
          +(event.clientX - domElementBoundingClientRect.left),
          -(event.clientY - domElementBoundingClientRect.top)
        ];

  return mouseCoordinates;
}

function addMouseEventHandler(domElement, type, handler) {
  domElement.addEventListener(type, function(event) {
    handler(event);

    event.preventDefault();
  });
}
