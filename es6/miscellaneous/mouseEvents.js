'use strict';

const constants = require('../constants');

const { MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL } = constants;

class MouseEvents {
  constructor(handlersMap, mouseDown, canvas) {
    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
    this.canvas = canvas;
  }

  mouseEventListener(event, eventType) {
    const handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

    handlers.forEach((handler) => handler(mouseCoordinates, this.mouseDown, this.canvas));

    event.preventDefault();
  }

  mouseUpEventListener(event) {
    this.mouseDown = false;

    this.mouseEventListener(event, MOUSE_UP);
  }

	mouseDownEventListener(event) {
    this.mouseDown = true;

    this.mouseEventListener(event, MOUSE_DOWN);
  }

	mouseMoveEventListener(event) {
    this.mouseEventListener(event, MOUSE_MOVE);
  }

  mouseWheelEventListener(event) {
    const delta = deltaFromEvent(event),
          handlers = this.handlersMap[ MOUSE_WHEEL ];

    handlers.forEach((handler) => handler(delta, this.canvas));

		event.preventDefault();
  }

  addMouseUpHandler(mouseUpHandler) {
    const mouseUpHandlers = this.handlersMap[ MOUSE_UP ];

    mouseUpHandlers.push(mouseUpHandler);
  }

  addMouseDownHandler(mouseDownHandler) {
    const mouseDownHandlers = this.handlersMap[ MOUSE_DOWN ];

    mouseDownHandlers.push(mouseDownHandler);
  }

  addMouseMoveHandler(mouseMoveHandler) {
    const mouseMoveHandlers = this.handlersMap[ MOUSE_MOVE ];

    mouseMoveHandlers.push(mouseMoveHandler);
  }

  addMouseWheelHandler(mouseWheelHandler) {
    const mouseWheelHandlers = this.handlersMap[ MOUSE_WHEEL ];

    mouseWheelHandlers.push(mouseWheelHandler);
  }

  static fromNothing(canvas) {
    const handlersMap = {};

    handlersMap[ MOUSE_UP ] = [];
    handlersMap[ MOUSE_DOWN ] = [];
    handlersMap[ MOUSE_MOVE ] = [];
    handlersMap[ MOUSE_WHEEL ] = [];

    const mouseDown = false,  ///
					mouseEvents = new MouseEvents(handlersMap, mouseDown, canvas),
          canvasDOMElement = canvas.getDOMElement(),
					mouseUpEventListener = mouseEvents.mouseUpEventListener.bind(mouseEvents),
					mouseDownEventListener = mouseEvents.mouseDownEventListener.bind(mouseEvents),
					mouseMoveEventListener = mouseEvents.mouseMoveEventListener.bind(mouseEvents),
					mouseWheelEventListener = mouseEvents.mouseWheelEventListener.bind(mouseEvents);

    canvasDOMElement.addEventListener('mouseup', mouseUpEventListener);
    canvasDOMElement.addEventListener('mousedown', mouseDownEventListener);
    canvasDOMElement.addEventListener('mousemove', mouseMoveEventListener);
    canvasDOMElement.addEventListener('mousewheel', mouseWheelEventListener);

    return mouseEvents;
  }
}

module.exports = MouseEvents;

function deltaFromEvent(event) {
  const delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return delta;
}

function mouseCoordinatesFromEvent(event) {
  const canvasDOMElement = event.target,  ///
        domElementBoundingClientRect = canvasDOMElement.getBoundingClientRect(),
        mouseCoordinates = [
          +(event.clientX - domElementBoundingClientRect.left),
          -(event.clientY - domElementBoundingClientRect.top)
        ];

  return mouseCoordinates;
}
