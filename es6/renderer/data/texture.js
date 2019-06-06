'use strict';

const RendererData = require('../../renderer/data'),
      arrayUtilities = require('../../utilities/array');

const { merge, flatten } = arrayUtilities;

const add = merge;  ///

class TextureRendererData extends RendererData {
  constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, vertexTextureCoordinatesData) {
    super(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex);

    this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
  }

  getVertexTextureCoordinatesData() {
    return this.vertexTextureCoordinatesData;
  }

  addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
    const vertexTextureCoordinatesData = flatten(vertexTextureCoordinateTuples);

    add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
  }

  static fromNothing() { 
    const vertexTextureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, vertexTextureCoordinatesData);
    
    return textureRendererData;
  }
}

module.exports = TextureRendererData;
