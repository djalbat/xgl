"use strict";

import Pan from "../../miscellaneous/pan";
import Tilt from "../../miscellaneous/tilt";
import Zoom from "../../miscellaneous/zoom";
import Camera from "../camera";

import { DEFAULT_INITIAL_ANGLES,
         DEFAULT_INITIAL_OFFSETS,
         DEFAULT_INITIAL_DISTANCE,
         DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER,
         DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER } from "../../defaults";
import { offsetsMatrixFromOffsets,
         rotationsMatrixFromAngles,
         positionMatrixFromDistance,
         normalsMatrixFromRotationsMatrix,
         projectionMatrixFromCameraAndCanvas } from "../../utilities/matrix";

export default class DesignCamera extends Camera {
  constructor(zFar, zNear, fieldOfView, pan, tilt, zoom) {
    super(zFar, zNear, fieldOfView);

    this.pan = pan;
    this.tilt = tilt;
    this.zoom = zoom;
  }

  getPan() {
    return this.pan;
  }

  getTilt() {
    return this.tilt;
  }

  getZoom() {
    return this.zoom;
  }

  update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
    if (false) {
      ///
    } else if (shiftKeyDown) {
      this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
    } else if (mouseWheelDelta !== 0) {
      this.zoom.updateDistance(mouseWheelDelta);
    } else {
      this.tilt.updateAngles(relativeMouseCoordinates);
    }

    const camera = this,  ///
          angles = this.tilt.getAngles(),
          offsets = this.pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromCameraAndCanvas(camera, canvas),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

    render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  magnify(magnification) {
    super.magnify(magnification);

    this.pan.magnify(magnification);
    this.zoom.magnify(magnification);
  }

  static fromProperties(properties) {
    const { initialAngles = DEFAULT_INITIAL_ANGLES,
            initialOffsets = DEFAULT_INITIAL_OFFSETS,
            initialDistance = DEFAULT_INITIAL_DISTANCE,
            mouseWheelDeltaMultiplier = DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER,
            relativeMouseCoordinatesMultiplier = DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER } = properties,
          flipped = false,
          pan = Pan.fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = Zoom.fromInitialDistanceAndMouseWheelDeltaMultiplier(initialDistance, mouseWheelDeltaMultiplier),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);

    return designCamera;
  }
}
