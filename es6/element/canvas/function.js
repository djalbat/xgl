"use strict";

import CanvasElement from "../../element/canvas";

class FunctionCanvasElement extends CanvasElement {
  static fromProperties(properties) {
    const functionElement = CanvasElement.fromProperties(FunctionCanvasElement, properties);

    return functionElement;
  }
}

module.exports = FunctionCanvasElement;
