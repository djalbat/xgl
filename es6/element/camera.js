'use strict';

const Element = require('../element'),
      Pan = require('../miscellaneous/pan'),
      Tilt = require('../miscellaneous/tilt'),
      Zoom = require('../miscellaneous/zoom'),
      keyEvents = require('../miscellaneous/keyEvents'),
      MouseEvents = require('../miscellaneous/mouseEvents'),
      cameraUtilities = require('../utilities/camera');

const { calculateOffsetMatrix, calculateRotationMatrix, calculatePositionMatrix, calculateProjectionMatrix, calculateNormalMatrix } = cameraUtilities;

const defaultInitialDistance = 5,
      defaultInitialOffset = [ 0, 0, 0 ];

class Camera extends Element {
  constructor(tilt, pan, zoom, handler, mouseDown) {
    super();

    this.tilt = tilt;
    this.pan = pan;
    this.zoom = zoom;
    this.handler = handler;
    this.mouseDown = mouseDown;
  }

  mouseUpHandler(mouseCoordinates, canvas) {
    this.mouseDown = false;
    
    this.tilt.mouseUpHandler();

    this.pan.mouseUpHandler();
  }

  mouseDownHandler(mouseCoordinates, canvas) {
    this.mouseDown = true;
    
    this.tilt.mouseDownHandler();

    this.pan.mouseDownHandler();
  }

  mouseMoveHandler(mouseCoordinates, canvas) {
    this.tilt.mouseMoveHandler(mouseCoordinates);

    this.pan.mouseMoveHandler(mouseCoordinates, this.tilt);

    if (this.mouseDown) {
      this.update(canvas);
    }
  }

  mouseWheelHandler(delta, canvas) {
    this.zoom.mouseWheelEventHandler(delta);

    this.update(canvas);
  }

  shiftKeyHandler(shiftKeyDown) {
    this.tilt.shiftKeyHandler(shiftKeyDown);

    this.pan.shiftKeyHandler(shiftKeyDown);
  }

  addKeyEventHandlers(canvas) {
    const shiftKeyHandler = this.shiftKeyHandler.bind(this);

    keyEvents.addShiftKeyHandler(shiftKeyHandler);
  }
  
  addMouseEventHandlers(canvas) {
    const mouseEvents = MouseEvents.fromNothing(canvas),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

    mouseEvents.onMouseUp(mouseUpHandler);
    mouseEvents.onMouseDown(mouseDownHandler);
    mouseEvents.onMouseMove(mouseMoveHandler);
    mouseEvents.onMouseWheel(mouseWheelHandler);
  }

  forceUpdate(canvas) {
    this.update(canvas);
  }

  onUpdate(handler) {
    this.handler = handler;
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
    
    if (this.handler) {  ///
      this.handler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
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
    this.addKeyEventHandlers(canvas);
    this.addMouseEventHandlers(canvas);
  }

  static fromProperties(properties) {
    const { initialDistance = defaultInitialDistance, initialOffset = defaultInitialOffset } = properties,
          tilt = Tilt.fromNothing(),
          pan = Pan.fromInitialOffset(initialOffset),
          zoom = Zoom.fromInitialDistance(initialDistance),
          handler = null,  ///
          mouseDown = false,
          camera = Element.fromProperties(Camera, properties, tilt, pan, zoom, handler, mouseDown);

    return camera;
  }
}

module.exports = Camera;
