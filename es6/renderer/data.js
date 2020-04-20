"use strict";

import { flatten, merge } from "../utilities/array";

const add = merge;  ///

class RendererData {
  constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
    this.vertexPositionsData = vertexPositionsData;
    this.vertexNormalsData = vertexNormalsData;
    this.vertexIndexesData = vertexIndexesData;
  }

  getCount() {
    const vertexIndexesDataLength = this.vertexIndexesData.length,
          count = vertexIndexesDataLength;  ///

    return count;
  }
  
  getVertexPositionsData() {
    return this.vertexPositionsData;
  }
  
  getVertexNormalsData() {
    return this.vertexNormalsData;
  }
  
  getVertexIndexesData() {
    return this.vertexIndexesData;
  }

  addVertexPositions(vertexPositions) {
    const vertexPositionsData = flatten(vertexPositions);

    add(this.vertexPositionsData, vertexPositionsData);
  }

  addVertexNormals(vertexNormals) {
    const vertexNormalsData = flatten(vertexNormals);

    add(this.vertexNormalsData, vertexNormalsData);
  }

  addVertexIndexes(vertexIndexes) {
    const vertexIndexesData = vertexIndexes;  ///

    add(this.vertexIndexesData, vertexIndexesData);
  }

  static fromNothing(Class, ...remainingArguments) {
    const vertexPositionsData = [],
          vertexNormalsData = [],
          vertexIndexesData = [],
          rendererData = new Class(vertexPositionsData, vertexNormalsData, vertexIndexesData, ...remainingArguments);
    
    return rendererData;
  }
}

module.exports = RendererData;
