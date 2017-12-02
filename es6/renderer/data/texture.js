'use strict';

const RendererData = require('../../renderer/data'),
      arrayUtilities = require('../../utilities/array'),
      vectorUtilities = require('../../utilities/vector');

const { add2, multiply2 } = vectorUtilities,
      { merge, flatten } = arrayUtilities,
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
    textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
      textureCoordinates =  verticallyFlipTextureCoordinates(textureCoordinates);

      return textureCoordinates;
    });

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

function verticallyFlipTextureCoordinates(textureCoordinates) { return add2(multiply2(textureCoordinates, [ 1, -1 ]), [ 0, 1 ]); }  ///
