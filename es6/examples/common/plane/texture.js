'use strict';

const plane = require('../plane'),
      TextureElement = require('../../../element/texture');

const { initialVertexPositionData } = plane;

class TexturePlane extends TextureElement {
  static fromProperties(properties) { return TextureElement.fromPropertiesAndInitialVertexPositionData(TexturePlane, properties, initialVertexPositionData); }
}

module.exports = TexturePlane;
