"use strict";

import Pan from "../../miscellaneous/pan";
import Tilt from "../../miscellaneous/tilt";

import Camera from "../camera";

import { scale2, scale3 } from "../../maths/vector";
import { getJSON, removeJSON, setJSON } from "../../utilities/localStorage";
import { GAMING_CAMERA, INVERT_MULTIPLIER, DEGREES_TO_RADIANS_MULTIPLIER } from "../../constants";
import { DEFAULT_PERSIST,
         DEFAULT_INITIAL_ANGLES,
         DEFAULT_INITIAL_POSITION,
         DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER,
         DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER } from "../../defaults";
import { offsetsMatrixFromOffsets,
         rotationsMatrixFromAngles,
         positionMatrixFromNothing,
         normalsMatrixFromRotationsMatrix,
         projectionMatrixFromCameraAndCanvas } from "../../utilities/matrix";

export default class GamingCamera extends Camera {
  constructor(zFar, zNear, fieldOfView, pan, tilt, persist) {
    super(zFar, zNear, fieldOfView);

    this.pan = pan;
    this.tilt = tilt;
    this.persist = persist;
  }

  getPan() {
    return this.pan;
  }

  getTilt() {
    return this.tilt;
  }

  doesPersist() {
    return this.persist;
  }

  reset() {
    const key = GAMING_CAMERA;  ///

    removeJSON(key);

    this.pan = panFromProperties(this.properties);
    this.tilt = tiltFromProperties(this.properties);
  }

  update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
    const mouseWheelMoved = (mouseWheelDelta !== 0);

    if (false) {
      ///
    } else if (shiftKeyDown || mouseWheelMoved) {
      const angles = this.tilt.getAngles();

      this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
    } else {
      this.tilt.updateAngles(relativeMouseCoordinates);
    }

    const camera = this,  ///
          angles = this.tilt.getAngles(),
          persist = this.doesPersist(),
          offsets = this.pan.getOffsets();

    if (persist) {
      const key = GAMING_CAMERA,  ///
            angles = this.tilt.getAngles(),
            json = {
              angles,
              offsets
            };

      setJSON(key, json);
    }

    const offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromCameraAndCanvas(camera, canvas),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

    render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  static fromProperties(properties) {
    const { persist = DEFAULT_PERSIST } = properties,
          pan = panFromProperties(properties),
          tilt = tiltFromProperties(properties),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, pan, tilt, persist);

    return gamingCamera;
  }
}

function panFromProperties(properties) {
  const { persist = DEFAULT_PERSIST,
          mouseWheelDeltaMultiplier = DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER,
          relativeMouseCoordinatesMultiplier = DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER } = properties;

  let  { initialPosition = DEFAULT_INITIAL_POSITION } = properties;

  let initialOffsets = scale3(initialPosition, INVERT_MULTIPLIER);

  if (persist) {
    const key = GAMING_CAMERA,  ///
          json = getJSON(key);

    if (json !== null) {
      const { offsets } = json;

      initialOffsets = offsets; ///
    }
  }

  const pan = Pan.fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);

  return pan;
}

function tiltFromProperties(properties) {
  const { persist = DEFAULT_PERSIST } = properties;

  let  { initialAngles = DEFAULT_INITIAL_ANGLES } = properties;

  initialAngles = scale2(initialAngles, DEGREES_TO_RADIANS_MULTIPLIER); ///

  if (persist) {
    const key = GAMING_CAMERA,  ///
          json = getJSON(key);

    if (json !== null) {
      const { angles } = json;

      initialAngles = angles; ///
    }
  }

  const clockwise = true,
        tilt = Tilt.fromInitialAnglesAndClockwise(initialAngles, clockwise);

  return tilt;
}