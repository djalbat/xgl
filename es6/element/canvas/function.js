'use strict';

const CanvasElement = require('../../element/canvas');

class FunctionCanvasElement extends CanvasElement {
  static fromProperties(properties) {
    const facets = [],
          functionElement = CanvasElement.fromProperties(FunctionCanvasElement, properties, facets);

    return functionElement;
  }
}

module.exports = FunctionCanvasElement;
