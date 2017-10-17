'use strict';

const plane = require('../plane'),
      ColourElement = require('../../../element/colour');

const { initialVertexPositionData } = plane;

class ColourPlane extends ColourElement {
  static fromProperties(properties) { return ColourElement.fromPropertiesAndInitialVertexPositionData(ColourPlane, properties, initialVertexPositionData); }
}

module.exports = ColourPlane;
