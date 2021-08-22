"use strict";

import Part from "../element/part";
import Mask from "../element/mask";
import Camera from "../element/camera";
import Element from "../element";
import UserInput from "../miscellaneous/userInput";

import { zero2 } from "../maths/vector";
import { DEFAULT_MAGNIFICATION, DEFAULT_MARGIN_OF_ERROR } from "../defaults";
import { elementFromChildElements, elementsFromChildElements } from "../utilities/element";

export default class Scene extends Element {
  constructor(parts, masks, camera, canvas) {
    super();

    this.parts = parts;
    this.masks = masks;
    this.camera = camera;
    this.canvas = canvas;
  }

  userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
    const render = this.render.bind(this);

    this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, this.canvas, render);
  }

  windowResizeHandler() {
    const clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight;

    this.canvas.resize(width, height);

    const relativeMouseCoordinates = zero2(), ///
          mouseWheelDelta = 0,  ///
          shiftKeyDown = false; ///

    this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
  }

  render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    this.canvas.clear();

    this.parts.forEach((part) => part.render(this.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix));
  }

  magnify(magnification) {
    this.masks.forEach((mask) => mask.magnify(magnification));

    this.parts.forEach((part) => part.magnify(magnification));

    this.camera.magnify(magnification);
  }

  initialise(canvas, marginOfError) {
    const userInput = UserInput.fromNothing(),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this);

    this.masks.forEach((mask) => mask.initialise(this.masks, marginOfError));

    this.parts.forEach((part) => part.initialise(canvas, this.masks, marginOfError));

    userInput.initialise(canvas);

    userInput.addUserInputHandler(userInputHandler);

    window.onresize = windowResizeHandler;

    this.windowResizeHandler(); ///
  }

  static fromProperties(properties) {
    const { canvas, magnification = DEFAULT_MAGNIFICATION, childElements } = properties,
          masks = elementsFromChildElements(childElements, Mask),
          parts = elementsFromChildElements(childElements, Part),
          camera = elementFromChildElements(childElements, Camera),
          scene = Element.fromProperties(Scene, properties, parts, masks, camera, canvas),
          marginOfError = DEFAULT_MARGIN_OF_ERROR * magnification * magnification;

    scene.magnify(magnification);

    scene.initialise(canvas, marginOfError);

    return scene;
  }
}
