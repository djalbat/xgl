'use strict';

const Renderer = require('../renderer'),
      RendererBuffers = require('../rendererBuffers'),
      ColourRendererData = require('../rendererData/colour'),
      vertexShaderSource = require('./source/colour/vertexShader'),
      fragmentShaderSource = require('./source/colour/fragmentShader'),
      ColourUniformLocations = require('./locations/colour/uniform'),
      ColourAttributeLocations = require('./locations/colour/attribute');

const { createProgram } = Renderer;

class ColourRenderer extends Renderer {
  constructor(program, uniformLocations, attributeLocations, rendererData, rendererBuffers) {
    super(program, uniformLocations, attributeLocations, rendererData, rendererBuffers);

    this.vertexColoursBuffer = null; ///
  }

  getVertexColourAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

    return vertexColourAttributeLocation;
  }

  addVertexColours(vertexColours) { this.rendererData.addVertexColours(vertexColours); }

  createBuffers(canvas) {
    const vertexColoursData = this.rendererData.getVertexColoursData();

    this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);

    super.createBuffers(canvas);
  }

  bindBuffers(canvas) {
    const vertexColourAttributeLocation = this.getVertexColourAttributeLocation(),
          vertexColourComponents = 4;

    canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);

    super.bindBuffers(canvas);
  }

  static fromNothing(canvas) {
    const program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          uniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          attributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          colourRendererData = ColourRendererData.fromNothing(),
          rendererData = colourRendererData,  ///
          rendererBuffers = RendererBuffers.fromNothing(),
          colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations, rendererData, rendererBuffers);
    
    return colourRenderer;
  }
}

module.exports = ColourRenderer;
