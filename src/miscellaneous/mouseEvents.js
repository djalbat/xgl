"use strict";

import { MOUSEUP_EVENT_TYPE, MOUSEDOWN_EVENT_TYPE, MOUSEMOVE_EVENT_TYPE, MOUSEWHEEL_EVENT_TYPE } from "../eventTypes";

export default class MouseEvents {
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

    this.mouseEventListener(event, MOUSEUP_EVENT_TYPE);
  }

	mouseDownEventListener(event) {
    this.mouseDown = true;

    this.mouseEventListener(event, MOUSEDOWN_EVENT_TYPE);
  }

	mouseMoveEventListener(event) {
    this.mouseEventListener(event, MOUSEMOVE_EVENT_TYPE);
  }

  mouseWheelEventListener(event) {
    const handlers = this.handlersMap[ MOUSEWHEEL_EVENT_TYPE ],
          mouseWheelDelta = mouseWheelDeltaFromEvent(event);

    handlers.forEach((handler) => handler(mouseWheelDelta));

		event.preventDefault();
  }

  addMouseUpHandler(mouseUpHandler) {
    const mouseUpHandlers = this.handlersMap[ MOUSEUP_EVENT_TYPE ];

    mouseUpHandlers.push(mouseUpHandler);
  }

  addMouseDownHandler(mouseDownHandler) {
    const mouseDownHandlers = this.handlersMap[ MOUSEDOWN_EVENT_TYPE ];

    mouseDownHandlers.push(mouseDownHandler);
  }

  addMouseMoveHandler(mouseMoveHandler) {
    const mouseMoveHandlers = this.handlersMap[ MOUSEMOVE_EVENT_TYPE ];

    mouseMoveHandlers.push(mouseMoveHandler);
  }

  addMouseWheelHandler(mouseWheelHandler) {
    const mouseWheelHandlers = this.handlersMap[ MOUSEWHEEL_EVENT_TYPE ];

    mouseWheelHandlers.push(mouseWheelHandler);
  }

  initialise(canvas) {
      const canvasDOMElement = canvas.getDOMElement(),
            mouseUpEventListener = this.mouseUpEventListener.bind(this),
            mouseDownEventListener = this.mouseDownEventListener.bind(this),
            mouseMoveEventListener = this.mouseMoveEventListener.bind(this),
            mouseWheelEventListener = this.mouseWheelEventListener.bind(this);

    this.handlersMap[ MOUSEUP_EVENT_TYPE ] = [];
    this.handlersMap[ MOUSEDOWN_EVENT_TYPE ] = [];
    this.handlersMap[ MOUSEMOVE_EVENT_TYPE ] = [];
    this.handlersMap[ MOUSEWHEEL_EVENT_TYPE ] = [];

    canvasDOMElement.addEventListener(MOUSEUP_EVENT_TYPE, mouseUpEventListener);

    canvasDOMElement.addEventListener(MOUSEDOWN_EVENT_TYPE, mouseDownEventListener);

    canvasDOMElement.addEventListener(MOUSEMOVE_EVENT_TYPE, mouseMoveEventListener);

    canvasDOMElement.addEventListener(MOUSEWHEEL_EVENT_TYPE, mouseWheelEventListener);
  }

  static fromNothing() {
    const handlersMap = {},
          mouseDown = false,  ///
					mouseEvents = new MouseEvents(handlersMap, mouseDown);

    return mouseEvents;
  }
}

function mouseWheelDeltaFromEvent(event) {
  const { wheelDelta } = event,
        mouseWheelDelta = Math.max(-1, Math.min(1, wheelDelta)); ///

  return mouseWheelDelta;
}

function mouseCoordinatesFromEvent(event) {
  const { target, clientX, clientY } = event,
        canvasDOMElement = target,  ///
        boundingClientRect = canvasDOMElement.getBoundingClientRect(),
        { top, left } = boundingClientRect,
        mouseCoordinates = [
          clientX - left,
          top - clientY
        ];

  return mouseCoordinates;
}
