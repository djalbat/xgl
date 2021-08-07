"use strict";

import Part from "../element/part";
import Mask from "../element/mask";
import Camera from "../element/camera";
import Element from "../element";
import UserInput from "../miscellaneous/userInput";

import { zero2 } from "../maths/vector";
import { DEFAULT_MAGNIFICATION } from "../constants";
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
    const width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          render = this.render.bind(this),
          callback = render;  ///

    this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
  }

  windowResizeHandler() {
    const clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight,  ///
          render = this.render.bind(this),
          callback = render;  ///

    this.canvas.resize(width, height);

    const relativeMouseCoordinates = zero2(), ///
          mouseWheelDelta = 0,  ///
          shiftKeyDown = false; ///

    this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
  }

  render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    this.canvas.clear();

    this.parts.forEach((part) => part.render(this.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix));
  }

  magnifiy(magnification) {
    debugger
  }

  initialise(canvas, magnification) {
    const userInput = UserInput.fromNothing(),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this);

    this.magnifiy(magnification);

    this.masks.forEach((mask) => mask.initialise(this.masks));

    this.parts.forEach((part) => part.initialise(canvas, this.masks));

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
          scene = Element.fromProperties(Scene, properties, parts, masks, camera, canvas);

    scene.initialise(canvas, magnification);

    return scene;
  }
}
