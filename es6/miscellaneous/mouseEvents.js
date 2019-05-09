'use strict';

const constants = require('../constants');

const { MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL } = constants;

class MouseEvents {
  constructor(handlersMap, mouseDown, canvas) {
    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
    this.canvas = canvas;
  }

  onMouseUp(mouseUpHandler) {
    this.addHandler(MOUSE_UP, mouseUpHandler);
  }

  onMouseDown(mouseDownHandler) {
    this.addHandler(MOUSE_DOWN, mouseDownHandler);
  }

  onMouseMove(mouseMoveHandler) {
    this.addHandler(MOUSE_MOVE, mouseMoveHandler);
  }

  onMouseWheel(mouseWheelHandler) {
    this.addHandler(MOUSE_WHEEL, mouseWheelHandler);
  }

  addHandler(eventType, handler) {
    const handlers = this.handlersMap[eventType];

    handlers.push(handler);
  }

	mouseUpEventHandler(event) {
    this.mouseDown = false;

    this.mouseEventHandler(event, MOUSE_UP);
  }

	mouseDownEventHandler(event) {
    this.mouseDown = true;

    this.mouseEventHandler(event, MOUSE_DOWN);
  }

	mouseMoveEventHandler(event) {
    this.mouseEventHandler(event, MOUSE_MOVE);
  }

  mouseWheelEventHandler(event) {
    const delta = deltaFromEvent(event),
          handlers = this.handlersMap[MOUSE_WHEEL];

    handlers.forEach((handler) => handler(delta));

		event.preventDefault();
  }

	mouseEventHandler(event, eventType) {
		const handlers = this.handlersMap[eventType],
					mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

		handlers.forEach((handler) => handler(mouseCoordinates, this.mouseDown, this.canvas));

		event.preventDefault();
	}

  static fromNothing(canvas) {
    const handlersMap = {},
          mouseDown = false,  ///
					domElement = canvas.getDOMElement(),
					mouseEvents = new MouseEvents(handlersMap, mouseDown, canvas),
					mouseUpEventHandler = mouseEvents.mouseUpEventHandler.bind(mouseEvents),
					mouseDownEventHandler = mouseEvents.mouseDownEventHandler.bind(mouseEvents),
					mouseMoveEventHandler = mouseEvents.mouseMoveEventHandler.bind(mouseEvents),
					mouseWheelEventHandler = mouseEvents.mouseWheelEventHandler.bind(mouseEvents);

		handlersMap[MOUSE_UP] = [];
		handlersMap[MOUSE_DOWN] = [];
		handlersMap[MOUSE_MOVE] = [];
		handlersMap[MOUSE_WHEEL] = [];

    domElement.addEventListener('mouseup', mouseUpEventHandler);
    domElement.addEventListener('mousedown', mouseDownEventHandler);
    domElement.addEventListener('mousemove', mouseMoveEventHandler);
    domElement.addEventListener('mousewheel', mouseWheelEventHandler);

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
