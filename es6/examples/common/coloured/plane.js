'use strict';

const plane = require('../plane'),
      ColouredElement = require('../../../element/coloured');

const { initialVertexPositionData } = plane;

class ColouredPlane extends ColouredElement {
  static fromProperties(properties) { return ColouredElement.fromPropertiesAndInitialVertexPositionData(ColouredPlane, properties, initialVertexPositionData); }
}

module.exports = ColouredPlane;
