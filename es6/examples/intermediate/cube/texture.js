'use strict';

const Cube = require('../cube'),
      imageMapUtilities = require('../../../utilities/imageMap');

const { textureCoordinateDataFromImageNames } = imageMapUtilities;

const imageNames = [
        'ivy.jpg',
        'steel.jpg',
        'grass.jpg',
        'bricks.jpg',
        'carpet.jpg',
        'concrete.jpg'
      ],
      textureCoordinateData = textureCoordinateDataFromImageNames(imageNames);

class TextureCube extends Cube {
  constructor(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    super(vertexPositionData, vertexNormalData, vertexIndexData);
    
    this.textureCoordinateData = textureCoordinateData;
  }

  getTextureCoordinateData() {
    return this.textureCoordinateData;
  }

  createElement(colourShader, textureShader) {
    const vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData(),
          vertexIndexData = this.getVertexIndexData();

    textureShader.addVertexPositionData(vertexPositionData);
    textureShader.addVertexNormalData(vertexNormalData);
    textureShader.addVertexIndexData(vertexIndexData);
    textureShader.addTextureCoordinateData(this.textureCoordinateData);
  }
  
  static fromProperties(properties) { return Cube.fromProperties(TextureCube, properties, textureCoordinateData); }
}

module.exports = TextureCube;

