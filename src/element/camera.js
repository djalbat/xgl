"use strict";

import Element from "../element";

import { DEGREES_TO_RADIANS_MULTIPLIER } from "../constants";
import { DEFAULT_Z_FAR, DEFAULT_Z_NEAR, DEFAULT_FIELD_OF_VIEW } from "../defaults";

export default class Camera extends Element {
  constructor(zFar, zNear, fieldOfView) {
    super();

    this.zFar = zFar;
    this.zNear = zNear;
    this.fieldOfView = fieldOfView;
  }

  getZFar() {
    return this.zFar;
  }

  getZNear() {
    return this.zNear;
  }

  getFieldOfView() {
    return this.fieldOfView;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    let { fieldOfView = DEFAULT_FIELD_OF_VIEW } = properties;

    fieldOfView *= DEGREES_TO_RADIANS_MULTIPLIER; ///

    const { zFar = DEFAULT_Z_FAR, zNear = DEFAULT_Z_NEAR } = properties,
          camera = Element.fromProperties(Class, properties, zFar, zNear, fieldOfView, ...remainingArguments);

    return camera;
  }
}
