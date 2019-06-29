'use strict';

const Tilt = require('../../miscellaneous/tilt'),
      Camera = require('../camera'),
      Location = require('../../miscellaneous/location'),
      vectorMaths = require('../../maths/vector'),
      matrixUtilities = require('../../utilities/matrix');

const { zero2 } = vectorMaths,
      { offsetsMatrixFromOffsets, rotationsMatrixFromAngles, positionMatrixFromNothing, projectionMatrixFromWidthAndHeight, normalsMatrixFromRotationsMatrix } = matrixUtilities;

const defaultInitialAngles = zero2(),
      defaultInitialPosition = [ 0, 0, 5 ];

class GamingCamera extends Camera {
  constructor(keyEvents, mouseEvents, updateHandler, tilt, location) {
    super(keyEvents, mouseEvents, updateHandler);

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
    this.tilt.resetPreviousAngles();
  }

  mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
    this.location.resetPreviousMouseCoordinates();

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
    this.location.updateZOffset(delta, this.tilt);

    this.update(canvas);
  }

  update(canvas) {
    const width = canvas.getWidth(),
          height = canvas.getHeight(),
          angles = this.tilt.getAngles(),
          offsets = this.location.getOffsets(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix),
          updateHandler = this.getUpdateHandler();

    updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  static fromProperties(properties) {
    const { initialPosition = defaultInitialPosition, initialAngles = defaultInitialAngles } = properties,
          flipped = true,
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          location = Location.fromInitialPosition(initialPosition),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);

    return gamingCamera;
  }
}

module.exports = GamingCamera;
