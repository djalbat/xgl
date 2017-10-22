'use strict';

const RendererData = require('../rendererData'),
      arrayUtilities = require('../utilities/array');

const { merge, flatten } = arrayUtilities,
      add = merge;  ///

class ColourRendererData extends RendererData {
  constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, vertexColoursData) {
    super(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex);

    this.vertexColoursData = vertexColoursData;
  }
  
  getVertexColoursData() {
    return this.vertexColoursData;
  }

  addVertexColours(vertexColours) {
    const vertexColoursData = flatten(vertexColours);

    add(this.vertexColoursData, vertexColoursData);
  }

  static fromNothing() { 
    const vertexColoursData = [],
          colourRendererData = RendererData.fromNothing(ColourRendererData, vertexColoursData);
    
    return colourRendererData;
  }
}

module.exports = ColourRendererData;
