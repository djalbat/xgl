'use strict';

const cuboid = require('../cuboid'),
      ColourElement = require('../../../element/colour');

const { initialVertexPositionData } = cuboid;

class ColourCuboid extends ColourElement {
  static fromProperties(properties) { return ColourElement.fromPropertiesAndInitialVertexPositionData(ColourCuboid, properties, initialVertexPositionData); }
}

module.exports = ColourCuboid;
