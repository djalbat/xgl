'use strict';

const vertexNormalComponents = 3,
      vertexPositionComponents = 3;

class RendererBuffers {
  constructor(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
    this.vertexPositionsBuffer = vertexPositionsBuffer;
    this.vertexNormalsBuffer = vertexNormalsBuffer;
    this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
  }

  createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
    this.createVertexPositionsBuffer(vertexPositionsData, canvas);
    this.createVertexNormalsBuffer(vertexNormalsData, canvas);
    this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
  }

  bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
    this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
    this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
    this.bindVertexIndexesElementBuffer(canvas);
  }

  createVertexPositionsBuffer(vertexPositionsData, canvas) {
    this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
  }

  createVertexNormalsBuffer(vertexNormalsData, canvas) {
    this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
  }

  createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
    this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
  }

  bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
    canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
  }

  bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
    canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
  }

  bindVertexIndexesElementBuffer(canvas) {
    canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
  }
  
  static fromNothing() {
    const vertexPositionsBuffer = null, ///
          vertexNormalsBuffer = null, ///
          vertexIndexesElementBuffer = null,  ///
          rendererBuffers = new RendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);

    return rendererBuffers;
  }
}

module.exports = RendererBuffers;
