'use strict';

const Element = require('../element');

class Camera extends Element {
  constructor(pan, tilt) {
    super();

    this.pan = pan;

    this.tilt = tilt;
  }

  getPan() {
    return this.pan;
  }

  getTilt() {
    return this.tilt;
  }

  forceUpdate(width, height, render) {
    this.update(width, height, render);
  }

  render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    ///
  }

  initialise(canvas) {
    ///
  }

  parentContext() {
	  const forceUpdate = this.forceUpdate.bind(this),
          userInputUpdate = this.userInputUpdate.bind(this);

    return ({
      forceUpdate,
      userInputUpdate
    });
  }
  
  static fromProperties(Class, properties, ...remainingArguments) { return Element.fromProperties(Class, properties, ...remainingArguments); }
}

module.exports = Camera;
