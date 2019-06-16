'use strict';

const Camera = require('../camera');

class GamingCamera extends Camera {
  shiftKeyHandler(shiftKeyDown) {

  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {

  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {

  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {

  }

  mouseWheelHandler(delta, canvas) {

  }

  update(canvas) {
    ///
  }

  static fromProperties(properties) { return Camera.fromProperties(GamingCamera, properties); }
}

module.exports = GamingCamera;
