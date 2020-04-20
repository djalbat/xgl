"use strict";

import { asynchronousUtilities } from "necessary";

import Part from "../element/part";
import Camera from "../element/camera";
import Element from "../element";
import UserInput from "../miscellaneous/userInput";

import { zero2 } from "../maths/vector";

const { forEach } = asynchronousUtilities;

class Scene extends Element {
  constructor(parts, camera, canvas) {
    super();

    this.parts = parts;

    this.camera = camera;

    this.canvas = canvas;
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

  userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
    const width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          render = this.render.bind(this),
          callback = render;  ///

    this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
  }

  render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    this.canvas.clear();

    this.parts.forEach((part) => part.render(this.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix));
  }

  initialise(canvas, update, done) {
    const userInput = UserInput.fromNothing(),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this);

    userInput.initialise(canvas);

    initialiseParts(this.parts, update, canvas, () => {
      window.onresize = windowResizeHandler;

      userInput.addUserInputHandler(userInputHandler);

      this.windowResizeHandler(); ///

      done && done(); ///
    });
  }

  static fromProperties(properties) {
    const { canvas, done, update, childElements } = properties,
          parts = partsFromChildElements(childElements),
          camera = cameraFromChildElements(childElements),
          scene = Element.fromProperties(Scene, properties, parts, camera, canvas);

    scene.initialise(canvas, update, done);

    return scene;
  }
}

module.exports = Scene;

function defer(callback) {
  setTimeout(callback, 0);
}

function initialiseParts(parts, update, canvas, done) {
  forEach(parts, (part, next, done, context, index) => {
    const partsLength = parts.length,
          progress = ( index + 1 ) / partsLength;

    part.initialise(canvas);

    defer(() => {
      update && update(progress); ///

      next();
    });
  }, done);
}

function partsFromChildElements(childElements) {
  const parts = childElements.reduce((parts, childElement) => {
    if (childElement instanceof Part) {
      const part = childElement;  ///

      parts.push(part);
    }
    return parts;
  }, []);

  return parts;
}

function cameraFromChildElements(childElements) {
  const camera = childElements.reduce((camera, childElement) => {
    if (camera === null) {
      if (childElement instanceof Camera) {
        camera = childElement;  ///
      }
    }

    return camera;
  }, null);

  return camera;
}
