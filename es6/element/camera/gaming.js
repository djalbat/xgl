'use strict';

const Tilt = require('../../miscellaneous/tilt'),
      Camera = require('../camera'),
      Location = require('../../miscellaneous/location'),
      cameraUtilities = require('../../utilities/camera');

const { offsetMatrixFromOffset, rotationMatrixFromAngles, positionMatrixFromDistance, projectionMatrixFromWidthAndHeight, normalMatrixFromRotationMatrix } = cameraUtilities;

const defaultInitialOffset = [ 0, 0, 0 ];

class GamingCamera extends Camera {
  constructor(keyEvents, mouseEvents, updateHandler, tilt, location) {
    super(keyEvents, mouseEvents, updateHandler);

    this.tilt = tilt;

    this.location = location;
  }

  shiftKeyHandler(shiftKeyDown) {
    if (shiftKeyDown) {
      this.location.updatePreviousOffset();

      this.location.updatePreviousMouseCoordinates();
    } else {
      // this.tilt.updatePreviousAngles();
      //
      // this.tilt.updatePreviousMouseCoordinates();
    }
  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {

  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {

  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    this.tilt.setMouseCoordinates(mouseCoordinates);

    this.location.setMouseCoordinates(mouseCoordinates);

    if (shiftKeyDown) {
      this.location.updateXYOffset(this.tilt);
    } else {
      // this.tilt.updateAngles();
    }

    this.update(canvas);
  }

  mouseWheelHandler(delta, canvas) {
    this.location.updateZOffset(this.tilt, delta);

    this.update(canvas);
  }

  update(canvas) {
    const width = canvas.getWidth(),
          height = canvas.getHeight(),
          angles = this.tilt.getAngles(),
          offset = this.location.getOffset(),
          distance = 5,  ///
          offsetMatrix = offsetMatrixFromOffset(offset),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromDistance(distance),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix),
          updateHandler = this.getUpdateHandler();

    console.log(offset)

    updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  static fromProperties(properties) {
    const { initialOffset = defaultInitialOffset } = properties,
          tilt = Tilt.fromNothing(),
          location = Location.fromInitialOffset(initialOffset),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);

    return gamingCamera;
  }
}

module.exports = GamingCamera;
