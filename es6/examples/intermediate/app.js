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
  constructor(cubes, colourShader, textureShader, canvas) {
    this.cubes = cubes;
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
    const firstCube = first(this.cubes),
          secondCube = second(this.cubes),
          colourCube = firstCube, ///
          textureCube = secondCube, ///
          colourCubeCount = colourCube.getCount(),
          textureCubeCount = textureCube.getCount(),
          xAxisAngle = angles.getXAxisAngle(),
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

    this.canvas.clear();

    colourCube.bind(this.colourShader, this.canvas);

    this.canvas.useShader(this.colourShader);

    this.colourShader.activateTexture(this.canvas);

    this.canvas.render(this.colourShader, normal, rotation, position, perspective);

    this.canvas.drawElements(colourCubeCount);

    textureCube.bind(this.textureShader, this.canvas);

    this.canvas.useShader(this.textureShader);

    this.textureShader.activateTexture(this.canvas);

    this.canvas.render(this.textureShader, normal, rotation, position, perspective);

    this.canvas.drawElements(textureCubeCount);
  }
}

module.exports = App;

