'use strict';

const Tilt = require('../../miscellaneous/tilt'),
      Camera = require('../camera'),
      Location = require('../../miscellaneous/location'),
      cameraUtilities = require('../../utilities/camera');

const { offsetMatrixFromOffset, rotationMatrixFromAngles, positionMatrixFromNothing, projectionMatrixFromWidthAndHeight, normalMatrixFromRotationMatrix } = cameraUtilities;

const defaultInitialOffset = [ 0, 0, -5 ];

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
      this.tilt.updatePreviousAngles();

      this.tilt.updatePreviousMouseCoordinates();
    }
  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
    this.location.updatePreviousMouseCoordinates();

    this.tilt.updatePreviousAngles();
  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    if (shiftKeyDown) {
      this.location.updatePreviousOffset();

      this.location.updatePreviousMouseCoordinates();
    }

    this.tilt.updatePreviousMouseCoordinates();
  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    this.location.setMouseCoordinates(mouseCoordinates);

    this.tilt.setMouseCoordinates(mouseCoordinates);

    if (mouseDown) {
      if (shiftKeyDown) {
        this.location.updateOffset(this.tilt);
      } else {
        this.tilt.updateAngles();
      }

      this.update(canvas);
    }
  }

  mouseWheelHandler(delta, canvas) {
    ///

    this.update(canvas);
  }

  update(canvas) {
    const width = canvas.getWidth(),
          height = canvas.getHeight(),
          offset = this.location.getOffset(),
          angles = this.tilt.getAngles(),
          offsetMatrix = offsetMatrixFromOffset(offset),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromNothing(),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix),
          updateHandler = this.getUpdateHandler();

    updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  static fromProperties(properties) {
    const { initialOffset = defaultInitialOffset} = properties,
          flipped = true,
          tilt = Tilt.fromFlipped(flipped),
          location = Location.fromInitialOffset(initialOffset),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);

    return gamingCamera;
  }
}

module.exports = GamingCamera;
