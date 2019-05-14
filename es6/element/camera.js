'use strict';

const Element = require('../element'),
      Pan = require('../miscellaneous/pan'),
      Tilt = require('../miscellaneous/tilt'),
      Zoom = require('../miscellaneous/zoom'),
      KeyEvents = require('../miscellaneous/keyEvents'),
      MouseEvents = require('../miscellaneous/mouseEvents'),
      cameraUtilities = require('../utilities/camera');

const { calculateOffsetMatrix, calculateRotationMatrix, calculatePositionMatrix, calculateProjectionMatrix, calculateNormalMatrix } = cameraUtilities;

const defaultInitialDistance = 10,
      defaultInitialOffset = [ 0, 0, 0 ];

class Camera extends Element {
  constructor(pan, tilt, zoom, keyEvents, mouseEvents, updateHandler) {
    super();

    this.pan = pan;
    this.tilt = tilt;
    this.zoom = zoom;
    this.keyEvents = keyEvents;
    this.mouseEvents = mouseEvents;
    this.updateHandler = updateHandler;
  }

  shiftKeyHandler(shiftKeyDown) {
    this.pan.shiftKeyHandler(shiftKeyDown);

    this.tilt.shiftKeyHandler(shiftKeyDown);
  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
    this.tilt.mouseUpHandler();

    this.pan.mouseUpHandler();
  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
    this.tilt.mouseDownHandler();

    this.pan.mouseDownHandler();
  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
    this.tilt.mouseMoveHandler(mouseCoordinates);

    this.pan.mouseMoveHandler(mouseCoordinates, mouseDown, this.tilt);

    if (mouseDown) {
      this.update(canvas);
    }
  }

  mouseWheelHandler(delta, canvas) {
    this.zoom.mouseWheelEventHandler(delta);

    this.update(canvas);
  }

  forceUpdate(canvas) {
    this.update(canvas);
  }

  onUpdate(updateHandler) {
    this.updateHandler = updateHandler;
  }
  
  update(canvas) {
    const width = canvas.getWidth(),
          height = canvas.getHeight(),
          offset = this.pan.getOffset(),
          angles = this.tilt.getAngles(),
          distance = this.zoom.getDistance(),
          offsetMatrix = calculateOffsetMatrix(offset),
          rotationMatrix = calculateRotationMatrix(angles),
          positionMatrix = calculatePositionMatrix(distance),
          projectionMatrix = calculateProjectionMatrix(width, height),
          normalMatrix = calculateNormalMatrix(rotationMatrix);
    
    this.updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    ///
  }

  parentContext() {
	  const onUpdate = this.onUpdate.bind(this),
				  forceUpdate = this.forceUpdate.bind(this);

    return ({
      onUpdate,
      forceUpdate
    });
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

    mouseEvents.onMouseUp(mouseUpHandler);
    mouseEvents.onMouseDown(mouseDownHandler);
    mouseEvents.onMouseMove(mouseMoveHandler);
    mouseEvents.onMouseWheel(mouseWheelHandler);

    this.keyEvents = keyEvents;

    this.mouseEvents = mouseEvents;
  }

  static fromProperties(properties) {
    const { initialOffset = defaultInitialOffset, initialDistance = defaultInitialDistance } = properties,
          pan = Pan.fromInitialOffset(initialOffset),
          tilt = Tilt.fromNothing(),
          zoom = Zoom.fromInitialDistance(initialDistance),
          keyEvents = null, ///
          mouseEvents = null, ///
          updateHandler = null,  ///
          camera = Element.fromProperties(Camera, properties, pan, tilt, zoom, keyEvents, mouseEvents, updateHandler);

    return camera;
  }
}

module.exports = Camera;
