'use strict';

const Element = require('../element');

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

    this.forceUpdate();
  }

  updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.canvas.clear();

    this.childElements.forEach(function(childElement) {
      childElement.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    });
  }

  initialise() {
    const resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this);

    this.assignContext();

    this.onResize(resizeHandler);

    this.onUpdate(updateHandler);

    this.resizeHandler(); ///
  }

  static fromProperties(properties) {
    const { canvas } = properties,
          scene = Element.fromProperties(Scene, properties, canvas);

    scene.initialise();

    return scene;
  }
}

module.exports = Scene;
