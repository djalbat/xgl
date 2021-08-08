"use strict";

import Pan from "../../miscellaneous/pan";
import Tilt from "../../miscellaneous/tilt";

import Camera from "../camera";

import { DEFAULT_DELTA_MULTIPLIER, DEFAULT_INITIAL_ANGLES, DEFAULT_INITIAL_POSITION } from "../../defaults";
import { offsetsMatrixFromOffsets,
         rotationsMatrixFromAngles,
         positionMatrixFromNothing,
         normalsMatrixFromRotationsMatrix,
         projectionMatrixFromWidthAndHeight } from "../../utilities/matrix";

export default class GamingCamera extends Camera {
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

  magnify(magnification) {
    this.pan.magnify(magnification);
  }

  static fromProperties(properties) {
    const { initialAngles = DEFAULT_INITIAL_ANGLES, initialPosition = DEFAULT_INITIAL_POSITION, deltaMultiplier = DEFAULT_DELTA_MULTIPLIER } = properties,
          flipped = true,
          pan = Pan.fromInitialPositionAndDeltaMultiplier(initialPosition, deltaMultiplier),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, pan, tilt);

    return gamingCamera;
  }
}
