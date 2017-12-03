'use strict';

const cylinder = require('../cylinder'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const { defaultVertices, defaultIndexes } = cylinder;

class ColouredCylinder extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices, indexes = defaultIndexes, colour } = properties,
          colouredCylinder = ColouredCanvasElement.fromProperties(ColouredCylinder, properties, vertices, indexes, colour);

    return colouredCylinder;
  }
}

module.exports = ColouredCylinder;
