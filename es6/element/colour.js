'use strict';

const Element = require('../element'),
      vertexUtilities = require('../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateVertexIndexData, calculateVertexColourData } = vertexUtilities;

class ColourElement extends Element {
  constructor(vertexPositionData, vertexIndexData, vertexNormalData, vertexColourData) {
    super();

    this.vertexPositionData = vertexPositionData;
    this.vertexIndexData = vertexIndexData;
    this.vertexNormalData = vertexNormalData;
    this.vertexColourData = vertexColourData;
  }

  getVertexPositionData() {
    return this.vertexPositionData;
  }

  getVertexIndexData() {
    return this.vertexIndexData;
  }

  getVertexNormalData() {
    return this.vertexNormalData;
  }

  getVertexColourData() {
    return this.vertexColourData;
  }

  create(colourRenderer, textureRenderer) {
    colourRenderer.addVertexPositionData(this.vertexPositionData);
    colourRenderer.addVertexIndexData(this.vertexIndexData);
    colourRenderer.addVertexNormalData(this.vertexNormalData);
    colourRenderer.addVertexColourData(this.vertexColourData);
  }

  static fromPropertiesAndInitialVertexPositionData(Class, properties, initialVertexPositionData) {
    const { width, height, depth, dimensions, position, rotations, transformations, colour } = properties,
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
          colourElement = new Class(vertexPositionData, vertexIndexData, vertexNormalData, vertexColourData);

    return colourElement;
  }
}

module.exports = ColourElement;
