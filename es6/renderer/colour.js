'use strict';

const necessary = require('necessary');

const Renderer = require('../renderer'),
      vertexShaderSource = require('./source/colour/vertexShader'),
      fragmentShaderSource = require('./source/colour/fragmentShader'),
      ColourUniformLocations = require('./locations/colour/uniform'),
      ColourAttributeLocations = require('./locations/colour/attribute');

const { createProgram } = Renderer,
      { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

class ColourRenderer extends Renderer {
  constructor(program, uniformLocations, attributeLocations, vertexColourData, vertexColourBuffer) {
    super(program, uniformLocations, attributeLocations);

    this.vertexColourData = vertexColourData;
    this.vertexColourBuffer = vertexColourBuffer;
  }

  getVertexColourAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

    return vertexColourAttributeLocation;
  }

  addVertexColourData(vertexColourData) {
    add(this.vertexColourData, vertexColourData);
  }

  createBuffers(canvas) {
    this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);

    super.createBuffers(canvas);
  }

  bindBuffers(canvas) {
    const vertexColourAttributeLocation = this.getVertexColourAttributeLocation(),
          vertexColourComponents = 4;

    canvas.bindBuffer(this.vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);

    super.bindBuffers(canvas);
  }

  static fromNothing(canvas) {
    const program = createProgram(vertexShaderSource, fragmentShaderSource),
          colourUniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          colourAttributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          uniformLocations = colourUniformLocations,  ///
          attributeLocations = colourAttributeLocations,  ///
          vertexColourData = [],
          vertexColourBuffer = null,  ///
          colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations, vertexColourData, vertexColourBuffer);
    
    return colourRenderer;
  }
}

module.exports = ColourRenderer;
