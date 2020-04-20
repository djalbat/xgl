"use strict";

import RendererBuffers from "../../renderer/buffers";

const vertexColourComponents = 4;

class ColourRendererBuffers extends RendererBuffers {
  constructor(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
    super(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);

    this.vertexColoursBuffer = vertexColoursBuffer;
  }

  createVertexColoursBuffer(vertexColoursData, canvas) {
    this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
  }

  bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
    canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
  }

  createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
    super.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);

    this.createVertexColoursBuffer(vertexColoursData, canvas);
  }

  bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
    super.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);

    this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
  }

  static fromNothing() {
    const vertexColoursBuffer = null, ///
          colourRendererBuffers = RendererBuffers.fromNothing(ColourRendererBuffers, vertexColoursBuffer);
    
    return colourRendererBuffers;
  }
}

module.exports = ColourRendererBuffers;
