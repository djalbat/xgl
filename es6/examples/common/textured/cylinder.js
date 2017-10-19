'use strict';

const cylinder = require('../cylinder'),
      TexturedCanvasElement = require('../../../element/canvas/textured');

const { initialVertexPositionData } = cylinder;

class TexturedCylinder extends TexturedCanvasElement {
  getInitialVertexPositionData() {
    return initialVertexPositionData;
  }

  static fromProperties(properties) { return TexturedCanvasElement.fromProperties(TexturedCylinder, properties); }
}

module.exports = TexturedCylinder;
