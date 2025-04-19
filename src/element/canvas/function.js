"use strict";

import CanvasElement from "../../element/canvas";

export default class FunctionCanvasElement extends CanvasElement {
  static fromProperties(properties) {
    const functionCanvasElement = CanvasElement.fromProperties(FunctionCanvasElement, properties);

    return functionCanvasElement;
  }
}
