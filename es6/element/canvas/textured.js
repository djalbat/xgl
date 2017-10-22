'use strict';

const CanvasElement = require('../../element/canvas'),
      imageMapUtilities = require('../../utilities/imageMap');

const { textureCoordinatesFromImageNames } = imageMapUtilities;

class TexturedCanvasElement extends CanvasElement {
  constructor(transform, imageName) {
    super(transform);

    this.imageName = imageName;
  }

  calculateTextureCoordinates(vertexPositions) {
    const vertexPositionsLength = vertexPositions.length,
          imageNamesLength = vertexPositionsLength / 4,  ///
          imageNames = [];

    for (let index = 0; index < imageNamesLength; index++) {
      imageNames.push(this.imageName);
    }

    const textureCoordinates = textureCoordinatesFromImageNames(imageNames);

    return textureCoordinates;
  }

  create(colourRenderer, textureRenderer, transforms) {
    const vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          textureCoordinates = this.calculateTextureCoordinates(vertexPositions);
    
    textureRenderer.addVertexPositions(vertexPositions);
    textureRenderer.addVertexIndexes(vertexIndexes);
    textureRenderer.addVertexNormals(vertexNormals);
    textureRenderer.addTextureCoordinates(textureCoordinates);

    super.create(colourRenderer, textureRenderer, transforms);
  }
  
  static fromProperties(Class, properties) {
    const { imageName } = properties,
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, imageName);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
