'use strict';

const Element = require('../element'),
      vertexUtilities = require('../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateVertexIndexData, calculateTextureCoordinateData } = vertexUtilities;

class TexturedElement extends Element {
  constructor(vertexPositionData, vertexIndexData, vertexNormalData, textureCoordinateData) {
    super();

    this.vertexPositionData = vertexPositionData;
    this.vertexIndexData = vertexIndexData;
    this.vertexNormalData = vertexNormalData;
    this.textureCoordinateData = textureCoordinateData;
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

  getTextureCoordinateData() {
    return this.textureCoordinateData;
  }

  create(colourRenderer, textureRenderer) {
    textureRenderer.addVertexPositionData(this.vertexPositionData);
    textureRenderer.addVertexIndexData(this.vertexIndexData);
    textureRenderer.addVertexNormalData(this.vertexNormalData);
    textureRenderer.addTextureCoordinateData(this.textureCoordinateData);
  }
  
  static fromPropertiesAndInitialVertexPositionData(Class, properties, initialVertexPositionData) { 
    const { width, height, depth, dimensions, position, rotations, transformations, imageName } = properties,
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          texturedElement = new Class(vertexPositionData, vertexIndexData, vertexNormalData, textureCoordinateData);
    
    return texturedElement;
  }
}

module.exports = TexturedElement;
