'use strict';

const necessary = require('necessary');

const Shader = require('../shader'),
      UniformLocations = require('./locations/uniform'),
      AttributeLocations = require('./locations/attribute'),
      vertexShaderSource = require('./source/colour/vertex'),
      fragmentShaderSource = require('./source/colour/fragment');

const { createVertexShader, createFragmentShader } = Shader,
      { vertexColourAttributeName } = vertexShaderSource,
      { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

class ColourShader extends Shader {
  constructor(program, uniformLocations, attributeLocations, vertexColourAttributeLocation, vertexColourData) {
    super(program, uniformLocations, attributeLocations);

    this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    this.vertexColourData = vertexColourData;
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
    const vertexColourComponents = 4;

    canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
  }

  activateTexture(canvas) {}  ///

  static fromNothing(canvas) {
    const vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          program = canvas.createProgram(vertexShader, fragmentShader),
          vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          uniformLocations = UniformLocations.fromProgram(program, canvas),
          attributeLocations = AttributeLocations.fromProgram(program, canvas),
          vertexColourData = [],
          colourShader = new ColourShader(program, uniformLocations, attributeLocations, vertexColourAttributeLocation, vertexColourData);
    
    return colourShader;
  }
}

module.exports = ColourShader;
