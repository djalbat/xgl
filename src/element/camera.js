"use strict";

import Element from "../element";

import { DEGREES_TO_RADIANS_MULTIPLIER } from "../constants";
import { DEFAULT_Z_FAR, DEFAULT_Z_NEAR, DEFAULT_FIELD_OF_VIEW, DEFAULT_MAGNIFICATION } from "../defaults";

export default class Camera extends Element {
  constructor(zFar, zNear, fieldOfView, magnification) {
    super();

    this.zFar = zFar;
    this.zNear = zNear;
    this.fieldOfView = fieldOfView;
    this.magnification = magnification;
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

  getMagnification() {
    return this.magnification;
  }

  magnify(magnification) {
    this.zFar = this.zFar * magnification;
    this.zNear = this.zNear * magnification;

    this.magnification = magnification;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    let { fieldOfView = DEFAULT_FIELD_OF_VIEW } = properties;

    fieldOfView *= DEGREES_TO_RADIANS_MULTIPLIER; ///

    const { zFar = DEFAULT_Z_FAR, zNear = DEFAULT_Z_NEAR } = properties,
          magnification = null,
          camera = Element.fromProperties(Class, properties, zFar, zNear, fieldOfView, magnification, ...remainingArguments);

    return camera;
  }
}
