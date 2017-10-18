'use strict';

const plane = require('../plane'),
      TexturedElement = require('../../../element/textured');

const { initialVertexPositionData } = plane;

class TexturedPlane extends TexturedElement {
  static fromProperties(properties) { return TexturedElement.fromPropertiesAndInitialVertexPositionData(TexturedPlane, properties, initialVertexPositionData); }
}

module.exports = TexturedPlane;
