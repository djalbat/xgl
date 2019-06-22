'use strict';

const Pan = require('../../miscellaneous/pan'),
      Tilt = require('../../miscellaneous/tilt'),
      Zoom = require('../../miscellaneous/zoom'),
      Camera = require('../camera'),
      vectorMaths = require('../../maths/vector'),
      cameraUtilities = require('../../utilities/camera');

const { zero2, zero3 } = vectorMaths,
      { offsetMatrixFromOffsets, rotationMatrixFromAngles, positionMatrixFromDistance, projectionMatrixFromWidthAndHeight, normalMatrixFromRotationMatrix } = cameraUtilities;

const defaultInitialAngles = zero2(),
      defaultInitialOffset = zero3(),
      defaultInitialDistance = 5;

class DesignCamera extends Camera {
  constructor(keyEvents, mouseEvents, updateHandler, pan, tilt, zoom) {
    super(keyEvents, mouseEvents, updateHandler);

    this.pan = pan;

    this.tilt = tilt;

    this.zoom = zoom;
  }

  shiftKeyHandler(shiftKeyDown) {
    if (shiftKeyDown) {
      this.pan.resetPreviousOffsets();

      this.pan.resetPreviousMouseCoordinates();
    } else {
      this.tilt.resetPreviousAngles();

      this.tilt.resetPreviousMouseCoordinates();
    }
  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
    this.pan.resetPreviousMouseCoordinates();

    this.tilt.resetPreviousAngles();
  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    if (shiftKeyDown) {
      this.pan.resetreviousOffsets();

      this.pan.resetPreviousMouseCoordinates();
    }

    this.tilt.resetPreviousMouseCoordinates();
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
          angles = this.tilt.getAngles(),
          offsets = this.pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetMatrix = offsetMatrixFromOffsets(offsets),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromDistance(distance),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix),
          updateHandler = this.getUpdateHandler();

    updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  static fromProperties(properties) {
    const { initialAngles = defaultInitialAngles, initialOffset = defaultInitialOffset, initialDistance = defaultInitialDistance } = properties,
          initialOffsets = initialOffset, ///
          flipped = false,
          pan = Pan.fromInitialOffsets(initialOffsets),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);

    return designCamera;
  }
}

module.exports = DesignCamera;
