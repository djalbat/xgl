"use strict";

import { asynchronousUtilities } from "necessary";

import Part from "../element/part";
import Mask from "../element/mask";
import Camera from "../element/camera";
import Element from "../element";
import UserInput from "../miscellaneous/userInput";

import { zero2 } from "../maths/vector";
import { DEFAULT_MAGNIFICATION } from "../constants";

const { forEach } = asynchronousUtilities;

export default class Scene extends Element {
  constructor(parts, masks, camera, canvas) {
    super();

    this.parts = parts;
    this.masks = masks;
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

  initialise(canvas, update, done, magnification) {
    const userInput = UserInput.fromNothing(),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this);

    userInput.initialise(canvas);

    initialiseMasks(this.masks, magnification);

    initialiseParts(this.parts, this.masks, update, canvas, magnification, () => {
      window.onresize = windowResizeHandler;

      userInput.addUserInputHandler(userInputHandler);

      this.windowResizeHandler(); ///

      done && done(); ///
    });
  }

  static fromProperties(properties) {
    const { canvas, update, done, magnification = DEFAULT_MAGNIFICATION, childElements } = properties,
          masks = masksFromChildElements(childElements),
          parts = partsFromChildElements(childElements),
          camera = cameraFromChildElements(childElements),
          scene = Element.fromProperties(Scene, properties, parts, masks, camera, canvas);

    scene.initialise(canvas, update, done, magnification);

    return scene;
  }
}

function defer(callback) {
  setTimeout(callback, 0);
}

function initialiseMasks(masks, magnification) {
  masks.forEach((mask) => mask.initialise(magnification, masks));
}

function initialiseParts(parts, masks, update, canvas, magnification, done) {
  forEach(parts, (part, next, done, context, index) => {
    const partsLength = parts.length,
          progress = ( index + 1 ) / partsLength;

    part.initialise(canvas, masks, magnification);

    defer(() => {
      update && update(progress); ///

      next();
    });
  }, done);
}

function masksFromChildElements(childElements) {
  const masks = childElements.reduce((masks, childElement) => {
    if (childElement instanceof Mask) {
      const mask = childElement;  ///

      masks.push(mask);
    }
    return masks;
  }, []);

  return masks;
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
