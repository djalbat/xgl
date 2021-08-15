"use strict";

import Pan from "../../miscellaneous/pan";
import Tilt from "../../miscellaneous/tilt";

import Camera from "../camera";

import { DEFAULT_DELTA_MULTIPLIER, DEFAULT_INITIAL_ANGLES, DEFAULT_INITIAL_POSITION } from "../../defaults";
import { offsetsMatrixFromOffsets,
         rotationsMatrixFromAngles,
         positionMatrixFromNothing,
         normalsMatrixFromRotationsMatrix,
         projectionMatrixFromCameraAndCanvas } from "../../utilities/matrix";

export default class GamingCamera extends Camera {
  constructor(zFar, zNear, fieldOfView, pan, tilt) {
    super(zFar, zNear, fieldOfView, pan, tilt);

    this.pan = pan;
    this.tilt = tilt;
  }

  getPan() {
    return this.pan;
  }

  getTilt() {
    return this.tilt;
  }

  update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
    if (false) {
      ///
    } else if (shiftKeyDown) {
      this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
    } else if (mouseWheelDelta !== 0) {
      this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
    } else {
      this.tilt.updateAngles(relativeMouseCoordinates);
    }

    const camera = this,  ///
          angles = this.tilt.getAngles(),
          offsets = this.pan.getOffsets(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromCameraAndCanvas(camera, canvas),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

    render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
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
