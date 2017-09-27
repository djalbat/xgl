'use strict';

const necessary = require('necessary');

const angles = require('../../angles'),
      zoom = require('../../zoom'),
      Normal = require('../../normal'),
      Rotation = require('../../rotation'),
      Position = require('../../position'),
      Perspective = require('../../perspective'),
      MouseEvents = require('../../mouseEvents');

const { arrayUtilities } = necessary,
      { first, second } = arrayUtilities;

class App {
  constructor(counts, colourShader, textureShader, canvas) {
    this.counts = counts;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
    this.canvas = canvas;
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

    console.log(height)
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
    const firstCount = first(this.counts),
          secondCount = second(this.counts),
          colourCount = firstCount, ///
          textureCount = secondCount; ///

    this.canvas.clear();

    this.colourShader.bind(this.canvas);

    this.canvas.useShader(this.colourShader);

    this.colourShader.activateTexture(this.canvas);

    this.canvas.render(this.colourShader, normal, rotation, position, perspective);

    this.canvas.drawElements(colourCount);

    this.textureShader.bind(this.canvas);

    this.canvas.useShader(this.textureShader);

    this.textureShader.activateTexture(this.canvas);

    this.canvas.render(this.textureShader, normal, rotation, position, perspective);

    this.canvas.drawElements(textureCount);
  }
}

module.exports = App;
