'use strict';

const Pan = require('../../miscellaneous/pan'),
      Tilt = require('../../miscellaneous/tilt'),
      Zoom = require('../../miscellaneous/zoom'),
      Camera = require('../camera'),
      cameraUtilities = require('../../utilities/camera');

const { offsetMatrixFromOffset, rotationMatrixFromAngles, positionMatrixFromDistance, projectionMatrixFromWidthAndHeight, normalMatrixFromRotationMatrix } = cameraUtilities;

const defaultInitialDistance = 5,
      defaultInitialOffset = [ 0, 0, 0 ];

class DesignCamera extends Camera {
  constructor(keyEvents, mouseEvents, updateHandler, pan, tilt, zoom) {
    super(keyEvents, mouseEvents, updateHandler);

    this.pan = pan;

    this.tilt = tilt;

    this.zoom = zoom;
  }

  shiftKeyHandler(shiftKeyDown) {
    if (shiftKeyDown) {
      this.pan.updatePreviousOffset();

      this.pan.updatePreviousMouseCoordinates();
    } else {
      this.tilt.updatePreviousAngles();

      this.tilt.updatePreviousMouseCoordinates();
    }
  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
    this.pan.updatePreviousMouseCoordinates();

    this.tilt.updatePreviousAngles();
  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    if (shiftKeyDown) {
      this.pan.updatePreviousOffset();

      this.pan.updatePreviousMouseCoordinates();
    }

    this.tilt.updatePreviousMouseCoordinates();
  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    this.pan.setMouseCoordinates(mouseCoordinates);

    this.tilt.setMouseCoordinates(mouseCoordinates);

    if (mouseDown) {
      if (shiftKeyDown) {
        this.pan.updateOffset(this.tilt);
      } else {
        this.tilt.updateAngles();
      }

      this.update(canvas);
    }
  }

  mouseWheelHandler(delta, canvas) {
    this.zoom.updateDistance(delta);

    this.update(canvas);
  }

  update(canvas) {
    const width = canvas.getWidth(),
          height = canvas.getHeight(),
          offset = this.pan.getOffset(),
          angles = this.tilt.getAngles(),
          distance = this.zoom.getDistance(),
          offsetMatrix = offsetMatrixFromOffset(offset),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromDistance(distance),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix),
          updateHandler = this.getUpdateHandler();

    updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  static fromProperties(properties) {
    const { initialOffset = defaultInitialOffset, initialDistance = defaultInitialDistance } = properties,
          flipped = false,
          pan = Pan.fromInitialOffset(initialOffset),
          tilt = Tilt.fromFlipped(flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);

    return designCamera;
  }
}

module.exports = DesignCamera;
