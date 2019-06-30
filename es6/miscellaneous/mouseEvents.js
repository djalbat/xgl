'use strict';

const constants = require('../constants');

const { MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL } = constants;

class MouseEvents {
  constructor(handlersMap, mouseDown) {
    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
  }

  mouseEventListener(event, eventType) {
    const handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event);

    handlers.forEach((handler) => handler(mouseCoordinates, this.mouseDown));

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
    const handlers = this.handlersMap[ MOUSE_WHEEL ],
          mouseWheelDelta = mouseWheelDeltaFromEvent(event);

    handlers.forEach((handler) => handler(mouseWheelDelta));

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

  initialise(canvas) {
      const canvasDOMElement = canvas.getDOMElement(),
            mouseUpEventListener = this.mouseUpEventListener.bind(this),
            mouseDownEventListener = this.mouseDownEventListener.bind(this),
            mouseMoveEventListener = this.mouseMoveEventListener.bind(this),
            mouseWheelEventListener = this.mouseWheelEventListener.bind(this);

    this.handlersMap[ MOUSE_UP ] = [];
    this.handlersMap[ MOUSE_DOWN ] = [];
    this.handlersMap[ MOUSE_MOVE ] = [];
    this.handlersMap[ MOUSE_WHEEL ] = [];

    canvasDOMElement.addEventListener('mouseup', mouseUpEventListener);

    canvasDOMElement.addEventListener('mousedown', mouseDownEventListener);

    canvasDOMElement.addEventListener('mousemove', mouseMoveEventListener);

    canvasDOMElement.addEventListener('mousewheel', mouseWheelEventListener);
  }

  static fromNothing() {
    const handlersMap = {},
          mouseDown = false,  ///
					mouseEvents = new MouseEvents(handlersMap, mouseDown);

    return mouseEvents;
  }
}

module.exports = MouseEvents;

function mouseWheelDeltaFromEvent(event) {
  const mouseWheelDelta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return mouseWheelDelta;
}

function mouseCoordinatesFromEvent(event) {
  const { target, clientX, clientY } = event,
        canvasDOMElement = target,  ///
        boundingClientRect = canvasDOMElement.getBoundingClientRect(),
        top = boundingClientRect.top,
        left = boundingClientRect.left,
        mouseCoordinates = [

          clientX - left,

          top - clientY,

        ];

  return mouseCoordinates;
}
