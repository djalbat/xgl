"use strict";

import RendererData from "../../renderer/data";

import { merge, flatten } from "../../utilities/array";

const add = merge;  ///

export default class TextureRendererData extends RendererData {
  constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
    super(vertexPositionsData, vertexNormalsData, vertexIndexesData);

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
