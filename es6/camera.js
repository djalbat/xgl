'use strict';

const Element = require('./element'),
      Canvas = require('./canvas'),
      Zoom = require('./camera/zoom'),
      angles = require('./camera/angles'),
      MouseEvents = require('./camera/mouseEvents'),
      OffsetMatrix = require('./matrix/offset'),
      NormalMatrix = require('./matrix/normal'),
      RotationMatrix = require('./matrix/rotation'),
      PositionMatrix = require('./matrix/position'),
      ProjectionMatrix = require('./matrix/projection');

class Camera extends Element {
  constructor(zoom, offset, updateHandler, canvas) {
    super();
    
    this.zoom = zoom;
    this.offset = offset;
    this.updateHandler = updateHandler;
    this.canvas = canvas;
  }

  getZoom() {
    return this.zoom;
  }

  getOffset() {
    return this.offset;
  }

  getUpdateHandler() {
    return this.updateHandler;
  }

  getCanvas() {
    return this.canvas;
  }
  
  addMouseEventHandlers() {
    const mouseEvents = MouseEvents.fromNothing(this.canvas);

    mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

    mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

    mouseEvents.addMouseMoveEventHandler(function(mouseCoordinates) {
      angles.mouseMoveEventHandler(mouseCoordinates);

      this.update();
    }.bind(this));

    mouseEvents.addMouseWheelEventHandler(function(delta) {
      this.zoom.mouseWheelEventHandler(delta);

      this.update();
    }.bind(this));
  }

  create(colourRenderer, textureRenderer) {
    ///
  }

  onUpdate(updateHandler) {
    this.updateHandler = updateHandler;
  }
  
  forceUpdate() {
    this.update();
  }

  update() {
    const xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          zAngle = angles.getZAngle(),
          distance = this.zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          offsetMatrix = OffsetMatrix.fromOffset(this.offset),
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);
    
    if (this.updateHandler) {  ///
      this.updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }

  parentContext() {
    return ({
      onUpdate: this.onUpdate.bind(this),
      forceUpdate: this.forceUpdate.bind(this)
    });
  }
  
  initialise() {
    this.addMouseEventHandlers();
  }

  static fromProperties(properties) {
    const { initialPosition, initialOffset } = properties,
          zoom = Zoom.fromInitialPosition(initialPosition),
          offset = initialOffset, ///
          canvas = new Canvas(),  ///
          updateHandler = null,  ///
          camera = new Camera(zoom, offset, updateHandler, canvas);
    
    camera.initialise();

    return camera;
  }
}

module.exports = Camera;
