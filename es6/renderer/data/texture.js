'use strict';

const RendererData = require('../../renderer/data'),
      arrayUtilities = require('../../utilities/array'),
      vectorUtilities = require('../../utilities/vector');

const { add2, multiply2 } = vectorUtilities,
      { merge, flatten } = arrayUtilities,
      add = merge;  ///

class TextureRendererData extends RendererData {
  constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, vertexTextureCoordinatesData) {
    super(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex);
    
    this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
  }
  
  getVertexTextureCoordinatesData() {
    return this.vertexTextureCoordinatesData;
  }

  addVertexTextureCoordinates(vertexTextureCoordinates) {
    vertexTextureCoordinates = vertexTextureCoordinates.map(function(vertexTextureCoordinates) {  ///
      vertexTextureCoordinates =  verticallyFlipVertexTextureCoordinates(vertexTextureCoordinates);

      return vertexTextureCoordinates;
    });

    const vertexTextureCoordinatesData = flatten(vertexTextureCoordinates);

    add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
  }

  static fromNothing() { 
    const vertexTextureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, vertexTextureCoordinatesData);
    
    return textureRendererData;
  }
}

module.exports = TextureRendererData;

function verticallyFlipVertexTextureCoordinates(vertexTextureCoordinates) { return add2(multiply2(vertexTextureCoordinates, [ 1, -1 ]), [ 0, 1 ]); }  ///
