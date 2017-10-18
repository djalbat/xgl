'use strict';

const cylinder = require('../cylinder'),
      ColouredElement = require('../../../element/coloured');

const { initialVertexPositionData } = cylinder;

class ColouredCylinder extends ColouredElement {
  static fromProperties(properties) { return ColouredElement.fromPropertiesAndInitialVertexPositionData(ColouredCylinder, properties, initialVertexPositionData); }
}

module.exports = ColouredCylinder;
