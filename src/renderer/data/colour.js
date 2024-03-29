"use strict";

import RendererData from "../../renderer/data";

import { add, flatten } from "../../utilities/array";

export default class ColourRendererData extends RendererData {
  constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
    super(vertexPositionsData, vertexNormalsData, vertexIndexesData);

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
