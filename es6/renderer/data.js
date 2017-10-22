'use strict';

const arrayUtilities = require('../utilities/array');

const { flatten, merge } = arrayUtilities,
      add = merge;  ///

class RendererData {
  constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex) {
    this.vertexPositionsData = vertexPositionsData;
    this.vertexNormalsData = vertexNormalsData;
    this.vertexIndexesData = vertexIndexesData;
    this.maximumVertexIndex = maximumVertexIndex;
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
    const offset = this.maximumVertexIndex + 1;

    vertexIndexes = vertexIndexes.map(function(vertexIndex) {
      return vertexIndex + offset;
    });

    this.maximumVertexIndex = Math.max(this.maximumVertexIndex, ...vertexIndexes);

    const vertexIndexesData = vertexIndexes;

    add(this.vertexIndexesData, vertexIndexesData);
  }
  
  static fromNothing(Class, ...remainingArguments) {
    const vertexPositionsData = [],
          vertexNormalsData = [],
          vertexIndexesData = [],
          maximumVertexIndex = -1,  ///
          rendererData = new Class(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, ...remainingArguments);
    
    return rendererData;
  }
}

module.exports = RendererData;
