'use strict';

const cylinder = require('../cylinder'),
      TextureElement = require('../../../element/texture');

const { initialVertexPositionData } = cylinder;

class TextureCylinder extends TextureElement {
  static fromProperties(properties) { return TextureElement.fromPropertiesAndInitialVertexPositionData(TextureCylinder, properties, initialVertexPositionData); }
}

module.exports = TextureCylinder;
