'use strict';

const angles = require('../../angles'),
      zoom = require('../../zoom'),
      Normal = require('../../normal'),
      Rotation = require('../../rotation'),
      Position = require('../../position'),
      Perspective = require('../../perspective');

class App {
  constructor(canvas, colourCube, colourShader, textureCube, textureShader) {
    this.canvas = canvas;
    this.colourCube = colourCube;
    this.colourShader = colourShader;
    this.textureCube = textureCube;
    this.textureShader = textureShader;
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
    const colourCubeCount = this.colourCube.getCount(),
          textureCubeCount = this.textureCube.getCount(),
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

    this.colourCube.bind(this.colourShader, this.canvas);

    this.canvas.useShader(this.colourShader);

    this.colourShader.activateTexture(this.canvas);

    this.canvas.render(this.colourShader, normal, rotation, position, perspective);

    this.canvas.drawElements(colourCubeCount);

    this.textureCube.bind(this.textureShader, this.canvas);

    this.canvas.useShader(this.textureShader);

    this.textureShader.activateTexture(this.canvas);

    this.canvas.render(this.textureShader, normal, rotation, position, perspective);

    this.canvas.drawElements(textureCubeCount);
  }
}

module.exports = App;

