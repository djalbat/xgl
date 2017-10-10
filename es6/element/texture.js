'use strict';

const Element = require('../element');

class TextureElement extends Element {
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

  static fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData, ...remainingArguments) {  /// 
    const textureElement = new Class(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData, ...remainingArguments);
    
    return textureElement;
  }
}

module.exports = TextureElement;
