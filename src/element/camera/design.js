"use strict";

import Pan from "../../miscellaneous/pan";
import Tilt from "../../miscellaneous/tilt";
import Zoom from "../../miscellaneous/zoom";
import Camera from "../camera";

import { DEFAULT_INITIAL_ANGLES, DEFAULT_INITIAL_OFFSETS, DEFAULT_INITIAL_DISTANCE, DEFAULT_DELTA_MULTIPLIER } from "../../defaults";
import { offsetsMatrixFromOffsets,
         rotationsMatrixFromAngles,
         positionMatrixFromDistance,
         normalsMatrixFromRotationsMatrix,
         projectionMatrixFromWidthAndHeight } from "../../utilities/matrix";

export default class DesignCamera extends Camera {
  constructor(pan, tilt, zoom) {
    super(pan, tilt);

    this.zoom = zoom;
  }

  update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
    const pan = this.getPan(),
          tilt = this.getTilt();

    if (false) {
      ///
    } else if (shiftKeyDown) {
      pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
    } else if (mouseWheelDelta !== 0) {
      this.zoom.updateDistance(mouseWheelDelta);
    } else {
      tilt.updateAngles(relativeMouseCoordinates);
    }

    const angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

    callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  magnify(magnification) {
    this.pan.magnify(magnification);
    this.zoom.magnify(magnification);
  }

  static fromProperties(properties) {
    const { initialAngles = DEFAULT_INITIAL_ANGLES, initialOffsets = DEFAULT_INITIAL_OFFSETS, initialDistance = DEFAULT_INITIAL_DISTANCE, deltaMultiplier = DEFAULT_DELTA_MULTIPLIER } = properties,
          flipped = false,
          pan = Pan.fromInitialOffsetsAndDeltaMultiplier(initialOffsets, deltaMultiplier),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = Zoom.fromInitialDistanceAndDeltaMultiplier(initialDistance, deltaMultiplier),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);

    return designCamera;
  }
}
