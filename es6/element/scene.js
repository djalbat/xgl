'use strict';

const Element = require('../element');

class Scene extends Element {
  onResize(resizeHandler) {
    window.onresize = resizeHandler;
  }

  resizeHandler() {
    const canvas = this.getCanvas(),
          clientWidth = canvas.getClientWidth(),
          clientHeight = canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight;  ///

    canvas.resize(width, height);

    this.forceUpdate();
  }

  updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const canvas = this.getCanvas();

    canvas.clear(); ///

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
    const scene = Element.fromProperties(Scene, properties);

    scene.initialise();

    return scene;
  }
}

module.exports = Scene;
