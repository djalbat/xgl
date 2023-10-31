"use strict";

import RendererData from "../../renderer/data";

import { push, flatten } from "../../utilities/array";

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

    push(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
  }

  static fromNothing() { 
    const vertexTextureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, vertexTextureCoordinatesData);
    
    return textureRendererData;
  }
}
