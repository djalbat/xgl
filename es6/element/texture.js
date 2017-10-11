'use strict';

const Element = require('../element');

class TextureElement extends Element {
  constructor(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    super();

    this.vertexPositionData = vertexPositionData;
    this.vertexNormalData = vertexNormalData;
    this.vertexIndexData = vertexIndexData;
    this.textureCoordinateData = textureCoordinateData;
  }

  getVertexPositionData() {
    return this.vertexPositionData;
  }

  getVertexNormalData() {
    return this.vertexNormalData;
  }

  getVertexIndexData() {
    return this.vertexIndexData;
  }

  getTextureCoordinateData() {
    return this.textureCoordinateData;
  }

  create(colourRenderer, textureRenderer) {
    textureRenderer.addVertexPositionData(this.vertexPositionData);
    textureRenderer.addVertexNormalData(this.vertexNormalData);
    textureRenderer.addVertexIndexData(this.vertexIndexData);    
    textureRenderer.addTextureCoordinateData(this.textureCoordinateData);
  }

  static fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData, ...remainingArguments) {  /// 
    const textureElement = new Class(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData, ...remainingArguments);
    
    return textureElement;
  }
}

module.exports = TextureElement;
