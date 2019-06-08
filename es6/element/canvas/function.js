'use strict';

const CanvasElement = require('../../element/canvas');

class FunctionCanvasElement extends CanvasElement {
  static fromProperties(properties) {
    const functionElement = CanvasElement.fromProperties(FunctionCanvasElement, properties);

    return functionElement;
  }
}

module.exports = FunctionCanvasElement;
