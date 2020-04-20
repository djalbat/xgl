"use strict";

import Renderer from "../renderer";
import vertexShaderSource from "./source/texture/vertexShader";
import TextureRendererData from "../renderer/data/texture";
import fragmentShaderSource from "./source/texture/fragmentShader";
import TextureRendererBuffers from "../renderer/buffers/texture";
import TextureUniformLocations from "./locations/texture/uniform";
import TextureAttributeLocations from "./locations/texture/attribute";

import { createProgram } from "../renderer";

class TextureRenderer extends Renderer {
  getTextureCoordinateAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

    return textureCoordinateAttributeLocation;
  }

  createBuffers(canvas) {
    const rendererData = this.getRendererData(),
          rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();

    rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
  }

  bindBuffers(canvas) {
    const rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

    rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
  }

  useTexture(index, canvas) {
    const uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          samplerUniformLocationIntegerValue = index; ///

    canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
  }

  static fromNothing(Class, canvas, ...remainingArguments) {
    const facets = [],
          program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          textureRendererBuffers = TextureRendererBuffers.fromNothing(),
          textureUniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          textureAttributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          rendererData = textureRendererData,  ///
          rendererBuffers = textureRendererBuffers, ///
          uniformLocations = textureUniformLocations, ///
          attributeLocations = textureAttributeLocations, ///
          textureRenderer = new Class(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, ...remainingArguments);

    canvas.enableAnisotropicFiltering();  ///

    return textureRenderer;
  }
}

module.exports = TextureRenderer;
