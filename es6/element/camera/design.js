"use strict";

const Pan = require("../../miscellaneous/pan"),
      Tilt = require("../../miscellaneous/tilt"),
      Zoom = require("../../miscellaneous/zoom"),
      Camera = require("../camera"),
      vectorMaths = require("../../maths/vector"),
      matrixUtilities = require("../../utilities/matrix");

const { zero2, zero3 } = vectorMaths,
      { offsetsMatrixFromOffsets, rotationsMatrixFromAngles, positionMatrixFromDistance, projectionMatrixFromWidthAndHeight, normalsMatrixFromRotationsMatrix } = matrixUtilities;

const defaultInitialAngles = zero2(),
      defaultInitialOffsets = zero3(),
      defaultInitialDistance = 5;

class DesignCamera extends Camera {
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

  static fromProperties(properties) {
    const { initialAngles = defaultInitialAngles, initialOffsets = defaultInitialOffsets, initialDistance = defaultInitialDistance } = properties,
          flipped = false,
          pan = Pan.fromInitialOffsets(initialOffsets),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);

    return designCamera;
  }
}

module.exports = DesignCamera;
