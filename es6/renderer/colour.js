'use strict';

const Renderer = require('../renderer'),
      ColourRendererData = require('../rendererData/colour'),
      ColourRendererBuffers = require('../rendererBuffers/colour'),
      vertexShaderSource = require('./source/colour/vertexShader'),
      fragmentShaderSource = require('./source/colour/fragmentShader'),
      ColourUniformLocations = require('./locations/colour/uniform'),
      ColourAttributeLocations = require('./locations/colour/attribute');

const { createProgram } = Renderer;

class ColourRenderer extends Renderer {
  getVertexColourAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

    return vertexColourAttributeLocation;
  }

  addVertexColours(vertexColours) { this.rendererData.addVertexColours(vertexColours); }

  createBuffers(canvas) {
    const rendererData = this.getRendererData(),
          rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          vertexColoursData = rendererData.getVertexColoursData();

    rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
  }

  bindBuffers(canvas) {
    const rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
    
    rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
  }

  static fromNothing(canvas) {
    const program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          colourRendererData = ColourRendererData.fromNothing(),
          colourRendererBuffers = ColourRendererBuffers.fromNothing(),
          rendererData = colourRendererData,  ///
          rendererBuffers = colourRendererBuffers,  ///
          uniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          attributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          colourRenderer = new ColourRenderer(program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
    
    return colourRenderer;
  }
}

module.exports = ColourRenderer;
