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
  constructor(program, uniformLocations, attributeLocations) {
    super(program, uniformLocations, attributeLocations);

    this.vertexColourData = [];
    
    this.vertexColourBuffer = null; ///
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
          uniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          attributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations);
    
    return colourRenderer;
  }
}

module.exports = ColourRenderer;
