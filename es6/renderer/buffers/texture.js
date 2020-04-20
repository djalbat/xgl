"use strict";

import RendererBuffers from "../../renderer/buffers";

const textureCoordinateComponents = 2;

class TextureRendererBuffers extends RendererBuffers {
  constructor(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
    super(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);

    this.textureCoordinatesBuffer = textureCoordinatesBuffer;
  }

  createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
    this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
  }

  bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
    canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
  }

  createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
    super.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);

    this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
  }

  bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
    super.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);

    this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
  }

  static fromNothing() {
    const textureCoordinatesBuffer = null,  ///
          textureRendererBuffers = RendererBuffers.fromNothing(TextureRendererBuffers, textureCoordinatesBuffer);
    
    return textureRendererBuffers;
  }
}

module.exports = TextureRendererBuffers;
