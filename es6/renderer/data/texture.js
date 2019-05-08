'use strict';

const RendererData = require('../../renderer/data'),
      vectorMaths = require('../../maths/vector'),
      arrayUtilities = require('../../utilities/array');

const { add2, multiply2 } = vectorMaths,
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
    vertexTextureCoordinates = vertexTextureCoordinates.map((vertexTextureCoordinates) => {  ///
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
