'use strict';

const Element = require('../element');

class Camera extends Element {
  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    ///
  }

  onUpdate(updateHandler) {
    this.updateHandler = updateHandler;
  }

  forceUpdate(canvas) {
    this.update(canvas);
  }

  parentContext() {
	  const onUpdate = this.onUpdate.bind(this),
				  forceUpdate = this.forceUpdate.bind(this);

    return ({
      onUpdate,
      forceUpdate
    });
  }
  
  static fromProperties(Class, properties, ...remainingArguments) { return Element.fromProperties(Class, properties, ...remainingArguments); }
}

module.exports = Camera;
