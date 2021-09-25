"use strict";

import Part from "../element/part";
import Mask from "../element/mask";
import Camera from "../element/camera";
import Element from "../element";
import UserInput from "../miscellaneous/userInput";

import { zero2 } from "../maths/vector";
import { DEFAULT_MARGIN_OF_ERROR } from "../defaults";
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

  escapeKeyDownHandler() {
    this.camera.reset();

    this.windowResizeHandler(); ///
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

    this.parts.forEach((part) => part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, this.canvas));
  }

  prepare() {
    this.masks.forEach((mask) => mask.prepare());

    this.parts.forEach((part) => part.prepare());
  }

  initialise(canvas, marginOfError) {
    const userInput = UserInput.fromNothing(),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this),
          escapeKeyDownHandler = this.escapeKeyDownHandler.bind(this);

    this.masks.forEach((mask) => mask.initialise(this.masks, marginOfError));

    this.parts.forEach((part) => part.initialise(canvas, this.masks, marginOfError));

    userInput.initialise(canvas);

    userInput.addUserInputHandler(userInputHandler);

    userInput.addEscapeKeyDownHandler(escapeKeyDownHandler);

    window.onresize = windowResizeHandler;

    this.windowResizeHandler(); ///
  }

  static fromProperties(properties) {
    const { canvas, childElements } = properties,
          masks = elementsFromChildElements(childElements, Mask),
          parts = elementsFromChildElements(childElements, Part),
          camera = elementFromChildElements(childElements, Camera),
          scene = Element.fromProperties(Scene, properties, parts, masks, camera, canvas),
          marginOfError = DEFAULT_MARGIN_OF_ERROR;

    scene.prepare();

    scene.initialise(canvas, marginOfError);

    return scene;
  }
}
