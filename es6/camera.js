'use strict';

const Element = require('./element'),
      Pan = require('./camera/pan'),
      Zoom = require('./camera/zoom'),
      tilt = require('./camera/tilt'),
      keyEvents = require('./camera/keyEvents'),
      MouseEvents = require('./camera/mouseEvents'),
      OffsetMatrix = require('./matrix/offset'),
      NormalMatrix = require('./matrix/normal'),
      RotationMatrix = require('./matrix/rotation'),
      PositionMatrix = require('./matrix/position'),
      ProjectionMatrix = require('./matrix/projection');

class Camera extends Element {
  constructor(pan, zoom, handler, mouseDown, canvas) {
    super();
    
    this.pan = pan;
    this.zoom = zoom;
    this.handler = handler;
    this.mouseDown = mouseDown;
    this.canvas = canvas;
  }
  
  mouseUpHandler(mouseCoordinates) {
    this.mouseDown = false;
    
    tilt.mouseUpHandler();

    this.pan.mouseUpHandler();
  }

  mouseDownHandler(mouseCoordinates) {
    this.mouseDown = true;
    
    tilt.mouseDownHandler();

    this.pan.mouseDownHandler();
  }

  mouseMoveHandler(mouseCoordinates) {
    tilt.mouseMoveHandler(mouseCoordinates);

    this.pan.mouseMoveHandler(mouseCoordinates, tilt);

    if (this.mouseDown) {
      this.update();
    }
  }

  mouseWheelHandler(delta) {
    this.zoom.mouseWheelEventHandler(delta);

    this.update();
  }

  shiftKeyHandler(shiftKeyDown) {
    tilt.shiftKeyHandler(shiftKeyDown);

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

    mouseEvents.addMouseUpHandler(mouseUpHandler);
    mouseEvents.addMouseDownHandler(mouseDownHandler);
    mouseEvents.addMouseMoveHandler(mouseMoveHandler);
    mouseEvents.addMouseWheelHandler(mouseWheelHandler);
  }

  create(colourRenderer, textureRenderer) {
    ///
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
          distance = this.zoom.getDistance(),
          offsetMatrix = OffsetMatrix.fromOffset(offset),
          rotationMatrix = RotationMatrix.fromAngles(tilt),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);
    
    if (this.handler) {  ///
      this.handler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }

  parentContext() {
    return ({
      onUpdate: this.onUpdate.bind(this),
      forceUpdate: this.forceUpdate.bind(this)
    });
  }
  
  initialise() {
    this.addKeyEventHandlers();
    this.addMouseEventHandlers();
  }

  static fromProperties(properties) {
    const { initialDistance, initialOffset, canvas } = properties,
          pan = Pan.fromInitialOffset(initialOffset),
          zoom = Zoom.fromInitialDistance(initialDistance),
          handler = null,  ///
          mouseDown = false,
          camera = new Camera(pan, zoom, handler, mouseDown, canvas);
    
    camera.initialise();

    return camera;
  }
}

module.exports = Camera;
