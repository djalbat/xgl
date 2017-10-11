'use strict';

const Element = require('./element'),
      Canvas = require('./canvas'),
      Zoom = require('./camera/zoom'),
      angles = require('./camera/angles'),
      MouseEvents = require('./camera/mouseEvents'),
      NormalMatrix = require('./matrix/normal'),
      RotationMatrix = require('./matrix/rotation'),
      PositionMatrix = require('./matrix/position'),
      ProjectionMatrix = require('./matrix/projection');

class Camera extends Element {
  constructor(zoom, canvas, updateHandler) {
    super();
    
    this.zoom = zoom;
    this.canvas = canvas;
    this.updateHandler = updateHandler;
  }

  getZoom() {
    return this.zoom;
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
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);
    
    if (this.updateHandler) {  ///
      this.updateHandler(rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
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
    const { initialPosition } = properties,
          zoom = Zoom.fromInitialPosition(initialPosition),
          canvas = new Canvas(),  ///
          updateHandler = null,  ///
          camera = new Camera(zoom, canvas, updateHandler);
    
    camera.initialise();

    return camera;
  }
}

module.exports = Camera;
