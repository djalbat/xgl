'use strict';

const Tilt = require('../../miscellaneous/tilt'),
      Camera = require('../camera'),
      Location = require('../../miscellaneous/location'),
      cameraUtilities = require('../../utilities/camera');

const { offsetMatrixFromOffsets, rotationMatrixFromAngles, positionMatrixFromNothing, projectionMatrixFromWidthAndHeight, normalMatrixFromRotationMatrix } = cameraUtilities;

const defaultInitialOffsets = [ 0, 0, -5 ];

class GamingCamera extends Camera {
  constructor(keyEvents, mouseEvents, updateHandler, tilt, location) {
    super(keyEvents, mouseEvents, updateHandler);

    this.tilt = tilt;

    this.location = location;
  }

  shiftKeyHandler(shiftKeyDown) {
    if (shiftKeyDown) {
      this.location.resetPreviousOffsets();

      this.location.resetPreviousMouseCoordinates();
    } else {
      this.tilt.resetPreviousAngles();

      this.tilt.resetPreviousMouseCoordinates();
    }
  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
    this.location.resetPreviousMouseCoordinates();

    this.tilt.resetPreviousAngles();
  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    if (shiftKeyDown) {
      this.location.resetPreviousOffsets();

      this.location.resetPreviousMouseCoordinates();
    }

    this.tilt.resetPreviousMouseCoordinates();
  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    this.location.setMouseCoordinates(mouseCoordinates);

    this.tilt.setMouseCoordinates(mouseCoordinates);

    if (mouseDown) {
      if (shiftKeyDown) {
        this.location.updateXYOffset(this.tilt);
      } else {
        this.tilt.updateAngles();
      }

      this.update(canvas);
    }
  }

  mouseWheelHandler(delta, canvas) {
    this.location.updateZOffset(delta, this.tilt);

    this.update(canvas);
  }

  update(canvas) {
    const width = canvas.getWidth(),
          height = canvas.getHeight(),
          offsets = this.location.getOffsets(),
          angles = this.tilt.getAngles(),
          offsetMatrix = offsetMatrixFromOffsets(offsets),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromNothing(),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix),
          updateHandler = this.getUpdateHandler();

    updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  static fromProperties(properties) {
    const { initialOffsets = defaultInitialOffsets } = properties,
          flipped = true,
          tilt = Tilt.fromFlipped(flipped),
          location = Location.fromInitialOffsets(initialOffsets),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);

    return gamingCamera;
  }
}

module.exports = GamingCamera;
