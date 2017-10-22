'use strict';

const RendererData = require('../../renderer/data'),
      arrayUtilities = require('../../utilities/array');

const { merge, flatten } = arrayUtilities,
      add = merge;  ///

class TextureRendererData extends RendererData {
  constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, textureCoordinatesData) {
    super(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex);
    
    this.textureCoordinatesData = textureCoordinatesData;
  }
  
  getTextureCoordinatesData() {
    return this.textureCoordinatesData;
  }

  addTextureCoordinates(textureCoordinates) {
    const textureCoordinatesData = flatten(textureCoordinates);

    add(this.textureCoordinatesData, textureCoordinatesData);
  }

  static fromNothing() { 
    const textureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, textureCoordinatesData);
    
    return textureRendererData;
  }
}

module.exports = TextureRendererData;
