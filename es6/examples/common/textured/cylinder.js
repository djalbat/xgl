'use strict';

const cylinder = require('../cylinder'),
      TexturedElement = require('../../../element/textured');

const { initialVertexPositionData } = cylinder;

class TexturedCylinder extends TexturedElement {
  static fromProperties(properties) { return TexturedElement.fromPropertiesAndInitialVertexPositionData(TexturedCylinder, properties, initialVertexPositionData); }
}

module.exports = TexturedCylinder;
