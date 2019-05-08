'use strict';

const Element = require('../element');

class Scene extends Element {
  resize() {
    const canvas = this.getCanvas(),
          clientWidth = canvas.getClientWidth(),
          clientHeight = canvas.getClientHeight(),
          width = clientWidth,  ///
          height = clientHeight;  ///

    canvas.resize(width, height);

    this.forceUpdate();
  }

  render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const canvas = this.getCanvas();

    canvas.clear(); ///

    this.childElements.forEach(function(childElement) {
      childElement.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    });
  }

  updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
  }

  initialise() {
    this.assignContext();

    const childElements = this.getChildElements();

    childElements.forEach(function(childElement) {
      childElement.initialise();
    });

    this.onUpdate(this.updateHandler.bind(this));

    window.onresize = this.resize.bind(this);

    this.resize();
  }

  static fromProperties(properties) {
    const scene = Element.fromProperties(Scene, properties);

    scene.initialise();

    return scene;
  }
}

module.exports = Scene;
