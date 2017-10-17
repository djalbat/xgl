'use strict';

const cylinder = require('../cylinder'),
      ColourElement = require('../../../element/colour');

const { initialVertexPositionData } = cylinder;

class ColourCylinder extends ColourElement {
  static fromProperties(properties) { return ColourElement.fromPropertiesAndInitialVertexPositionData(ColourCylinder, properties, initialVertexPositionData); }
}

module.exports = ColourCylinder;
