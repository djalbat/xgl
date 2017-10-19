'use strict';

const CanvasElement = require('../../element/canvas'),
      vertexUtilities = require('../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateVertexIndexData, calculateTextureCoordinateData } = vertexUtilities;

class TexturedCanvasElement extends CanvasElement {
  constructor(width, height, depth, dimensions, position, rotations, transformations, imageName) {
    super(width, height, depth, dimensions, position, rotations, transformations);

    this.imageName = imageName;
  }

  create(colourRenderer, textureRenderer) {
    const initialVertexPositionData = this.getInitialVertexPositionData(),
          width = this.getWidth(),
          height = this.getHeight(),
          depth = this.getDepth(),
          dimensions = this.getDimensions(),
          position = this.getPosition(),
          rotations = this.getRotations(),
          transformations = this.getTransformations(),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, this.imageName);

    textureRenderer.addVertexPositionData(vertexPositionData);
    textureRenderer.addVertexIndexData(vertexIndexData);
    textureRenderer.addVertexNormalData(vertexNormalData);
    textureRenderer.addTextureCoordinateData(textureCoordinateData);
  }
  
  static fromProperties(Class, properties) {
    const { imageName } = properties,
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, imageName);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
