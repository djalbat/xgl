"use strict";

const Pan = require("../../miscellaneous/pan"),
      Tilt = require("../../miscellaneous/tilt"),

      Camera = require("../camera"),
      vectorMaths = require("../../maths/vector"),
      matrixUtilities = require("../../utilities/matrix");

const { zero2 } = vectorMaths,
      { offsetsMatrixFromOffsets, rotationsMatrixFromAngles, positionMatrixFromNothing, projectionMatrixFromWidthAndHeight, normalsMatrixFromRotationsMatrix } = matrixUtilities;

const defaultInitialAngles = zero2(),
      defaultInitialPosition = [ 0, 0, 5 ];


class GamingCamera extends Camera {






  update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
    const pan = this.getPan(),
          tilt = this.getTilt();

    if (false) {
      ///
    } else if (shiftKeyDown) {
      pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
    } else if (mouseWheelDelta !== 0) {
      pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
    } else {
      tilt.updateAngles(relativeMouseCoordinates);
    }

    const angles = tilt.getAngles(),
          offsets = pan.getOffsets(),

          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

    callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  static fromProperties(properties) {
    const { initialAngles = defaultInitialAngles, initialPosition = defaultInitialPosition } = properties,
          flipped = true,
          pan = Pan.fromInitialPosition(initialPosition),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),

          gamingCamera = Camera.fromProperties(GamingCamera, properties, pan, tilt);

    return gamingCamera;
  }
}

module.exports = GamingCamera;
