'use strict';

const cuboid = require('../cuboid'),
      ColouredElement = require('../../../element/coloured');

const { initialVertexPositionData } = cuboid;

class ColouredCuboid extends ColouredElement {
  static fromProperties(properties) { return ColouredElement.fromPropertiesAndInitialVertexPositionData(ColouredCuboid, properties, initialVertexPositionData); }
}

module.exports = ColouredCuboid;
