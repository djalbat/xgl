"use strict";

import Part from "../element/part";
import Camera from "../element/camera";
import Element from "../element";
import UserInput from "../miscellaneous/userInput";

import { zero2 } from "../maths/vector";
import { DEFAULT_MARGIN_OF_ERROR, DEFAULT_BACKGROUND_COLOUR } from "../defaults";
import { elementFromChildElements, elementsFromChildElements } from "../utilities/element";

export default class Scene extends Element {
  constructor(parts, camera, canvas, colour) {
    super();

    this.parts = parts;
    this.camera = camera;
    this.canvas = canvas;
    this.colour = colour;
  }

  getParts() {
    return this.parts;
  }

  getCamera() {
    return this.camera;
  }

  getCanvas() {
    return this.canvas;
  }

  getColour() {
    return this.colour;
  }

  escapeKeyDownHandler = () => {
    this.camera.reset();

    this.windowResizeHandler(); ///
  }

  windowResizeHandler = () => {
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

  userInputHandler = (relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) => {
    const render = this.render.bind(this);

    this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, this.canvas, render);
  }

  initialise(canvas, marginOfError) {
    const userInput = UserInput.fromNothing();

    this.parts.forEach((part) => {
      part.initialise(canvas, marginOfError);
    });

    userInput.initialise(canvas);

    userInput.addUserInputHandler(this.userInputHandler);

    userInput.addEscapeKeyDownHandler(this.escapeKeyDownHandler);

    window.onresize = this.windowResizeHandler;

    this.windowResizeHandler(); ///
  }

  render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    this.canvas.clear(this.colour);

    this.parts.forEach((part) => {
      part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, this.canvas);
    });
  }

  static fromProperties(properties) {
    const { canvas, childElements, backgroundColour = DEFAULT_BACKGROUND_COLOUR } = properties,
          parts = elementsFromChildElements(childElements, Part),
          camera = elementFromChildElements(childElements, Camera),
          colour = backgroundColour,  //
          scene = Element.fromProperties(Scene, properties, parts, camera, canvas, colour),
          marginOfError = DEFAULT_MARGIN_OF_ERROR;

    scene.initialise(canvas, marginOfError);

    return scene;
  }
}
