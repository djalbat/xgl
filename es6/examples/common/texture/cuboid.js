'use strict';

const cuboid = require('../cuboid'),
      TextureElement = require('../../../element/texture');

const { initialVertexPositionData } = cuboid;

class TextureCuboid extends TextureElement {
  static fromProperties(properties) { return TextureElement.fromPropertiesAndInitialVertexPositionData(TextureCuboid, properties, initialVertexPositionData); }
}

module.exports = TextureCuboid;
