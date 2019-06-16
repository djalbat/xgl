'use strict';

const necessary = require('necessary');

const Element = require('../element');

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
          height = clientHeight;  ///

    this.canvas.resize(width, height);

    this.forceUpdate(this.canvas);
  }

  updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.canvas.clear();

    this.childElements.forEach((childElement) => childElement.render(this.canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix));
  }

  initialise(canvas, update, done) {
    const childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this);

    this.assignContext();

    this.onResize(resizeHandler);

    this.onUpdate(updateHandler);

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
  }

  static fromProperties(properties) {
    const { canvas, update, done } = properties,
          scene = Element.fromProperties(Scene, properties, canvas);

    scene.initialise(canvas, update, done);

    return scene;
  }
}

module.exports = Scene;

function defer(callback) {
  setTimeout(callback, 0);
}
