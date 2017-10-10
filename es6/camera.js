'use strict';

const Canvas = require('./canvas'),
      Zoom = require('./scene/zoom'),
      angles = require('./scene/angles'),
      Normal = require('./scene/normal'),
      Rotation = require('./scene/rotation'),
      Position = require('./scene/position'),
      Projection = require('./scene/projection'),
      MouseEvents = require('./scene/mouseEvents');

class Camera {
  constructor(zoom, canvas, callback) {
    this.zoom = zoom;
    this.canvas = canvas;
    this.callback = callback;
  }

  getZoom() {
    return this.zoom;
  }

  getCanvas() {
    return this.canvas;
  }
  
  getCallback() {
    return this.callback;
  }
  
  setCallback(callback) {
    this.callback = callback;
  }
  
  registerCallback(callback) {
    this.setCallback(callback);
  }

  create() {}

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
  
  update() {
    const xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = this.zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,  ///
          yAngle = undefined, ///
          zAngle = yAxisAngle, ///
          zCoordinate = -distance, ///
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          projection = Projection.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);
    
    if (this.callback) {  ///
      this.callback(rotation, position, projection, normal);
    }
  }

  parentContext() {
    return ({
      registerCallback: this.registerCallback.bind(this),
      addMouseEventHandlers: this.addMouseEventHandlers.bind(this)
    });
  }

  static fromProperties(properties) {
    const { initialPosition } = properties,
          initialDistance = -initialPosition[2], ///
          zoom = Zoom.fromInitialDistance(initialDistance),
          canvas = new Canvas(),  ///
          callback = null,  ///
          camera = new Camera(zoom, canvas, callback);

    return camera;
  }
}

module.exports = Camera;
