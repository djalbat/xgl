'use strict';

const Tilt = require('../../miscellaneous/tilt'),
      Zoom = require('../../miscellaneous/zoom'),
      Camera = require('../camera'),
      Location = require('../../miscellaneous/location'),
      vectorMaths = require('../../maths/vector'),
      matrixUtilities = require('../../utilities/matrix');

const { zero2, zero3 } = vectorMaths,
      { offsetsMatrixFromOffsets, rotationsMatrixFromAngles, positionMatrixFromDistance, projectionMatrixFromWidthAndHeight, normalsMatrixFromRotationsMatrix } = matrixUtilities;

const defaultInitialAngles = zero2(),
      defaultInitialOffsets = zero3(),
      defaultInitialDistance = 5;

class DesignCamera extends Camera {
  constructor(keyEvents, mouseEvents, updateHandler, zoom, tilt, location) {
    super(keyEvents, mouseEvents, updateHandler);

    this.zoom = zoom;

    this.tilt = tilt;

    this.location = location;
  }

  shiftKeyHandler(shiftKeyDown) {
    if (shiftKeyDown) {
      this.location.resetPreviousMouseCoordinates();
    } else {
      this.tilt.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousAngles();
    }
  }

  mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
    this.location.resetPreviousMouseCoordinates();

    this.tilt.resetPreviousAngles();
  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    if (shiftKeyDown) {
      this.location.resetPreviousMouseCoordinates();
    }

    this.tilt.resetPreviousMouseCoordinates();
  }

  mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
    const shiftKeyDown = this.keyEvents.isShiftKeyDown();

    this.location.resetPreviousMouseCoordinates();

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
    this.zoom.updateDistance(delta);

    this.update(canvas);
  }

  update(canvas) {
    const width = canvas.getWidth(),
          height = canvas.getHeight(),
          angles = this.tilt.getAngles(),
          offsets = this.location.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix),
          updateHandler = this.getUpdateHandler();

    updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  static fromProperties(properties) {
    const { initialAngles = defaultInitialAngles, initialOffsets = defaultInitialOffsets, initialDistance = defaultInitialDistance } = properties,
          flipped = false,
          zoom = Zoom.fromInitialDistance(initialDistance),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          location = Location.fromInitialOffsets(initialOffsets),
          designCamera = Camera.fromProperties(DesignCamera, properties, zoom, tilt, location);

    return designCamera;
  }
}

module.exports = DesignCamera;
