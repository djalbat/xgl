'use strict';

const Element = require('../element'),
      KeyEvents = require('../miscellaneous/keyEvents'),
      MouseEvents = require('../miscellaneous/mouseEvents');

class Camera extends Element {
  constructor(keyEvents, mouseEvents, updateHandler) {
    super();

    this.keyEvents = keyEvents;

    this.mouseEvents = mouseEvents;

    this.updateHandler = updateHandler;
  }

  getUpdateHandler() {
    return this.updateHandler;
  }

  forceUpdate(canvas) {
    this.update(canvas);
  }

  onUpdate(updateHandler) {
    this.updateHandler = updateHandler;
  }

  render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    ///
  }

  initialise(canvas) {
    const keyEvents = KeyEvents.fromNothing(canvas),
          mouseEvents = MouseEvents.fromNothing(canvas),
          shiftKeyHandler = this.shiftKeyHandler.bind(this),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

    keyEvents.addShiftKeyHandler(shiftKeyHandler);

    mouseEvents.addMouseUpHandler(mouseUpHandler);
    mouseEvents.addMouseDownHandler(mouseDownHandler);
    mouseEvents.addMouseMoveHandler(mouseMoveHandler);
    mouseEvents.addMouseWheelHandler(mouseWheelHandler);

    this.keyEvents = keyEvents;

    this.mouseEvents = mouseEvents;
  }

  parentContext() {
	  const onUpdate = this.onUpdate.bind(this),
				  forceUpdate = this.forceUpdate.bind(this);

    return ({
      onUpdate,
      forceUpdate
    });
  }
  
  static fromProperties(Class, properties, ...remainingArguments) {
    const keyEvents = null, ///
          mouseEvents = null, ///
          updateHandler = null, ///
          camera = Element.fromProperties(Class, properties, keyEvents, mouseEvents, updateHandler, ...remainingArguments);

    return camera;
  }
}

module.exports = Camera;
