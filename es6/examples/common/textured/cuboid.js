'use strict';

const cuboid = require('../cuboid'),
      TexturedElement = require('../../../element/textured');

const { initialVertexPositionData } = cuboid;

class TexturedCuboid extends TexturedElement {
  static fromProperties(properties) { return TexturedElement.fromPropertiesAndInitialVertexPositionData(TexturedCuboid, properties, initialVertexPositionData); }
}

module.exports = TexturedCuboid;
