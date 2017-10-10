'use strict';

const Element = require('./element'),
      Canvas = require('./canvas'),
      Zoom = require('./camera/zoom'),
      angles = require('./camera/angles'),
      Normal = require('./camera/normal'),
      Rotation = require('./camera/rotation'),
      Position = require('./camera/position'),
      Projection = require('./camera/projection'),
      MouseEvents = require('./camera/mouseEvents');

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

  create(colourShader, textureShader) {
    ///
  }

  onUpdate(updateHandler) {
    this.updateHandler = updateHandler;
  }
  
  forceUpdate() {
    this.update();
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
    
    if (this.updateHandler) {  ///
      this.updateHandler(rotation, position, projection, normal);
    }
  }

  context() {
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
