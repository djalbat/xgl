'use strict';

const zoom = require('./scene/zoom'),
      angles = require('./scene/angles'),
      Normal = require('./scene/normal'),
      Rotation = require('./scene/rotation'),
      Position = require('./scene/position'),
      Perspective = require('./scene/perspective'),
      MouseEvents = require('./scene/mouseEvents');

class Scene {
  constructor(canvas, colourShader, textureShader) {
    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
  }

  addMouseEventHandlers() {
    const mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpEventHandler = this.mouseUpEventHandler.bind(this),
          mouseDownEventHandler = this.mouseDownEventHandler.bind(this),
          mouseMoveEventHandler = this.mouseMoveEventHandler.bind(this),
          mouseWheelEventHandler = this.mouseWheelEventHandler.bind(this);

    mouseEvents.addMouseUpEventHandler(mouseUpEventHandler);
    mouseEvents.addMouseDownEventHandler(mouseDownEventHandler);
    mouseEvents.addMouseMoveEventHandler(mouseMoveEventHandler);
    mouseEvents.addMouseWheelEventHandler(mouseWheelEventHandler);

  }

  mouseUpEventHandler(mouseCoordinates) {
    angles.mouseUpEventHandler(mouseCoordinates);
  }

  mouseDownEventHandler(mouseCoordinates) {
    angles.mouseDownEventHandler(mouseCoordinates);
  }

  mouseMoveEventHandler(mouseCoordinates) {
    angles.mouseMoveEventHandler(mouseCoordinates);

    this.render();
  }

  mouseWheelEventHandler(delta) {
    zoom.mouseWheelEventHandler(delta);

    this.render();
  }

  resize() {
    const clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight;  ///

    this.canvas.resize(width, height);
  }

  render() {
    const xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,  ///
          zAngle = yAxisAngle, ///
          zCoordinate = -Math.max(10, distance), ///
          perspective = Perspective.fromWidthAndHeight(width, height),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          normal = Normal.fromRotation(rotation);

    this.drawElements(normal, rotation, position, perspective);
  }

  drawElements(normal, rotation, position, perspective) {
    this.canvas.clear();

    this.canvas.useShader(this.colourShader);

    this.colourShader.bindBuffers(this.canvas);

    this.colourShader.activateTexture(this.canvas);

    this.canvas.render(this.colourShader, normal, rotation, position, perspective);

    this.canvas.useShader(this.textureShader);

    this.textureShader.bindBuffers(this.canvas);

    this.textureShader.activateTexture(this.canvas);

    this.canvas.render(this.textureShader, normal, rotation, position, perspective);
  }

  static fromCanvasAndShaders(canvas, colourShader, textureShader) {
    const scene = new Scene(canvas, colourShader, textureShader);

    window.onresize = function() {
      scene.resize();

      scene.render(colourShader, textureShader);
    };

    scene.resize();

    scene.render(colourShader, textureShader);

    scene.addMouseEventHandlers();
  }
}

module.exports = Scene;
