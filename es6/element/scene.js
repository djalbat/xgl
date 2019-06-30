'use strict';

const necessary = require('necessary');

const Part = require('../element/part'),
      Camera = require('../element/camera'),
      Element = require('../element'),
      UserInput = require('../miscellaneous/userInput'),
      vectorMaths = require('../maths/vector');

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { zero2 } = vectorMaths;

class Scene extends Element {
  constructor(parts, camera, canvas) {
    super();

    this.parts = parts;

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

  initialise(canvas, update, done) {
    const userInput = UserInput.fromNothing(canvas),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this);

    forEach(this.parts, (part, next, done, context, index) => {
      const partsLength = this.parts.length,
            progress = ( index + 1 ) / partsLength;

      part.initialise(canvas);

      defer(() => {
        update && update(progress); ///

        next();
      });
    }, () => {
      this.windowResizeHandler(); ///

      done && done(); ///
    });

    window.onresize = windowResizeHandler;

    userInput.addUserInputHandler(userInputHandler);
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
