"use strict";

import Pan from "../../miscellaneous/pan";
import Tilt from "../../miscellaneous/tilt";
import Zoom from "../../miscellaneous/zoom";
import Camera from "../camera";

import { scale2 } from "../../maths/vector";
import { getJSON, setJSON, removeJSON } from "../../utilities/localStorage";
import { DESIGN_CAMERA, DEGREES_TO_RADIANS_MULTIPLIER } from "../../constants";
import { DEFAULT_PERSIST,
         DEFAULT_INITIAL_ANGLES,
         DEFAULT_INITIAL_OFFSETS,
         DEFAULT_INITIAL_DISTANCE,
         DEFAULT_MOUSE_SENSITIVITY,
         DEFAULT_MOUSE_WHEEL_SENSITIVITY } from "../../defaults";
import { offsetsMatrixFromOffsets,
         rotationsMatrixFromAngles,
         positionMatrixFromDistance,
         normalsMatrixFromRotationsMatrix,
         projectionMatrixFromCameraAndCanvas } from "../../utilities/matrix";

export default class DesignCamera extends Camera {
  constructor(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
    super(zFar, zNear, fieldOfView);

    this.pan = pan;
    this.tilt = tilt;
    this.zoom = zoom;
    this.persist = persist;
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

  doesPersist() {
    return this.persist;
  }

  reset() {
    const key = DESIGN_CAMERA;  ///

    removeJSON(key);

    this.pan = panFromProperties(this.properties);
    this.tilt = tiltFromProperties(this.properties);
    this.zoom = zoomFromProperties(this.properties);
  }

  update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
    const mouseWheelMoved = (mouseWheelDelta !== 0);

    if (false) {
      ///
    } else if (shiftKeyDown) {
      const angles = this.tilt.getAngles();

      this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
    } else if (mouseWheelMoved) {
      this.zoom.updateDistance(mouseWheelDelta);
    } else {
      this.tilt.updateAngles(relativeMouseCoordinates);
    }

    const camera = this,  ///
          angles = this.tilt.getAngles(),
          persist = this.doesPersist(),
          offsets = this.pan.getOffsets(),
          distance = this.zoom.getDistance();

    if (persist) {
      const key = DESIGN_CAMERA,
            json = {
              angles,
              offsets,
              distance
            };

      setJSON(key, json);
    }

    const offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromCameraAndCanvas(camera, canvas),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

    render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
  }

  static fromProperties(properties) {
    const { persist = DEFAULT_PERSIST } = properties,
          pan = panFromProperties(properties),
          tilt = tiltFromProperties(properties),
          zoom = zoomFromProperties(properties),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom, persist);

    return designCamera;
  }
}

function panFromProperties(properties) {
  const { persist = DEFAULT_PERSIST,
          mouseSensitivity = DEFAULT_MOUSE_SENSITIVITY,
          mouseWheelSensitivity = DEFAULT_MOUSE_WHEEL_SENSITIVITY } = properties;

  let { initialOffsets = DEFAULT_INITIAL_OFFSETS } = properties;

  if (persist) {
    const key = DESIGN_CAMERA,  ///
          json = getJSON(key);

    if (json !== null) {
      const { offsets } = json;

      initialOffsets = offsets; ///
    }
  }

  const pan = Pan.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);

  return pan;
}

function tiltFromProperties(properties) {
  const { persist = DEFAULT_PERSIST } = properties;

  let { initialAngles = DEFAULT_INITIAL_ANGLES } = properties;

  initialAngles = scale2(initialAngles, DEGREES_TO_RADIANS_MULTIPLIER); ///

  if (persist) {
    const key = DESIGN_CAMERA,  ///
          json = getJSON(key);

    if (json !== null) {
      const { angles } = json;

      initialAngles = angles; ///
    }
  }

  const tilt = Tilt.fromInitialAngles(initialAngles);

  return tilt;
}

function zoomFromProperties(properties) {
  const { persist = DEFAULT_PERSIST, mouseWheelSensitivity = DEFAULT_MOUSE_WHEEL_SENSITIVITY } = properties;

  let { initialDistance = DEFAULT_INITIAL_DISTANCE } = properties;

  if (persist) {
    const key = DESIGN_CAMERA,  ///
          json = getJSON(key);

    if (json !== null) {
      const { distance } = json;

      initialDistance = distance; ///
    }
  }

  const zoom = Zoom.fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity);

  return zoom;
}
