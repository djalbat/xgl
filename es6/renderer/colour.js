'use strict';

const necessary = require('necessary');

const Renderer = require('../renderer'),
      vertexShaderSource = require('./source/colour/vertexShader'),
      fragmentShaderSource = require('./source/colour/fragmentShader'),
      ColourUniformLocations = require('./locations/colour/uniform'),
      ColourAttributeLocations = require('./locations/colour/attribute');

const { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

class ColourRenderer extends Renderer {
  constructor(program, uniformLocations, attributeLocations, vertexColourData) {
    super(program, uniformLocations, attributeLocations);

    this.vertexColourData = vertexColourData;
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
    this.createVertexColourBuffer(canvas);

    super.createBuffers(canvas);
  }

  createVertexColourBuffer(canvas) {
    this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);
  }

  bindBuffers(canvas) {
    this.bindVertexColourBuffer(canvas);

    super.bindBuffers(canvas);
  }

  bindVertexColourBuffer(canvas) {
    const vertexColourAttributeLocation = this.getVertexColourAttributeLocation(),
          vertexColourComponents = 4;

    canvas.bindBuffer(this.vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
  }

  static fromNothing(canvas) {
    const vertexShader = canvas.createVertexRenderer(vertexShaderSource),
          fragmentShader = canvas.createFragmentRenderer(fragmentShaderSource),
          program = canvas.createProgram(vertexShader, fragmentShader),
          uniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          attributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          vertexColourData = [],
          colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations, vertexColourData);
    
    return colourRenderer;
  }
}

module.exports = ColourRenderer;
