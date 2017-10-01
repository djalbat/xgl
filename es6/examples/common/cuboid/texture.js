'use strict';

const Cuboid = require('../cuboid'),
      imageMapUtilities = require('../../../utilities/imageMap');

const { textureCoordinateDataFromImageName } = imageMapUtilities;

class TextureCuboid extends Cuboid {
  constructor(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    super(vertexPositionData, vertexNormalData, vertexIndexData);
    
    this.textureCoordinateData = textureCoordinateData;
  }

  getTextureCoordinateData() {
    return this.textureCoordinateData;
  }

  create(colourShader, textureShader) {
    const vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData(),
          vertexIndexData = this.getVertexIndexData();

    textureShader.addVertexPositionData(vertexPositionData);
    textureShader.addVertexNormalData(vertexNormalData);
    textureShader.addVertexIndexData(vertexIndexData);
    textureShader.addTextureCoordinateData(this.textureCoordinateData);
  }
  
  static fromProperties(properties) {
    const { imageName } = properties,
          textureCoordinateData = textureCoordinateDataFromImageName(imageName),
          textureCuboid = Cuboid.fromProperties(TextureCuboid, properties, textureCoordinateData);

    return textureCuboid;
  }
}

module.exports = TextureCuboid;
