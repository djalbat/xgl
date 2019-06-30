'use strict';

const necessary = require('necessary');

const Element = require('../element'),
      UserInput = require('../miscellaneous/userInput');

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities;

class Scene extends Element {
  constructor(canvas) {
    super();

    this.canvas = canvas;
  }

  onResize(resizeHandler) {
    window.onresize = resizeHandler;
  }

  resizeHandler() {
    const clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight,  ///
          render = this.render.bind(this);

    this.canvas.resize(width, height);

    this.forceUpdate(width, height, render);
  }

  render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    this.canvas.clear();

    this.childElements.forEach((childElement) => childElement.render(this.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix));
  }

  userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
    const width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          render = this.render.bind(this);

    this.userInputUpdate(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, render);
  }

  initialise(canvas, update, done) {
    const childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this);

    this.assignContext();

    this.onResize(resizeHandler);

    forEach(childElements, (childElement, next, done, context, index) => {
      const childElementsLength = childElements.length,
            progress = ( index + 1 ) / childElementsLength;

      childElement.initialise(canvas);

      defer(() => {
        update && update(progress); ///

        next();
      });
    }, () => {
      this.resizeHandler(); ///

      done && done(); ///
    });

    const userInput = UserInput.fromNothing(canvas),
          userInputHandler = this.userInputHandler.bind(this);

    userInput.addUserInputHandler(userInputHandler);
  }

  static fromProperties(properties) {
    const { canvas, done, update } = properties,
          scene = Element.fromProperties(Scene, properties, canvas);

    scene.initialise(canvas, update, done);

    return scene;
  }
}

module.exports = Scene;

function defer(callback) {
  setTimeout(callback, 0);
}
