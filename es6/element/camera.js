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
  constructor(tilt, pan, zoom, handler, mouseDown, canvas) {
    super();

    this.tilt = tilt;
    this.pan = pan;
    this.zoom = zoom;
    this.handler = handler;
    this.mouseDown = mouseDown;

    this.canvas = canvas;
  }

  getTilt() {
    return this.tilt;
  }

  getPan() {
    return this.pan;
  }

  getZoom() {
    return this.zoom;
  }

  getHandler() {
    return this.handler;
  }

  getMouseDown() {
    return this.mouseDown;
  }
  
  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    ///
  }

  mouseUpHandler(mouseCoordinates) {
    this.mouseDown = false;
    
    this.tilt.mouseUpHandler();

    this.pan.mouseUpHandler();
  }

  mouseDownHandler(mouseCoordinates) {
    this.mouseDown = true;
    
    this.tilt.mouseDownHandler();

    this.pan.mouseDownHandler();
  }

  mouseMoveHandler(mouseCoordinates) {
    this.tilt.mouseMoveHandler(mouseCoordinates);

    this.pan.mouseMoveHandler(mouseCoordinates, this.tilt);

    if (this.mouseDown) {
      this.update();
    }
  }

  mouseWheelHandler(delta) {
    this.zoom.mouseWheelEventHandler(delta);

    this.update();
  }

  shiftKeyHandler(shiftKeyDown) {
    this.tilt.shiftKeyHandler(shiftKeyDown);

    this.pan.shiftKeyHandler(shiftKeyDown);
  }

  addKeyEventHandlers() {
    const shiftKeyHandler = this.shiftKeyHandler.bind(this);

    keyEvents.addShiftKeyHandler(shiftKeyHandler);
  }
  
  addMouseEventHandlers() {
    const mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

    mouseEvents.onMouseUp(mouseUpHandler);
    mouseEvents.onMouseDown(mouseDownHandler);
    mouseEvents.onMouseMove(mouseMoveHandler);
    mouseEvents.onMouseWheel(mouseWheelHandler);
  }

  onUpdate(handler) {
    this.handler = handler;
  }
  
  forceUpdate() {
    this.update();
  }

  update() {
    const width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
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

  parentContext() {
	  const onUpdate = this.onUpdate.bind(this),
				  forceUpdate = this.forceUpdate.bind(this);

    return ({
      onUpdate,
      forceUpdate
    });
  }
  
  initialise() {
    this.addKeyEventHandlers();
    this.addMouseEventHandlers();
  }

  static fromProperties(properties) {
    const { initialDistance = defaultInitialDistance, initialOffset = defaultInitialOffset, canvas } = properties,
          tilt = Tilt.fromNothing(),
          pan = Pan.fromInitialOffset(initialOffset),
          zoom = Zoom.fromInitialDistance(initialDistance),
          handler = null,  ///
          mouseDown = false,
          camera = Element.fromProperties(Camera, properties, tilt, pan, zoom, handler, mouseDown, canvas);

    return camera;
  }
}

module.exports = Camera;
