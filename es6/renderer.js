'use strict';

const arrayUtilities = require('./utilities/array');

const { push } = arrayUtilities;

const add = push; ///

class Renderer {
  constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
    this.facets = facets;
    this.program = program;
    this.rendererData = rendererData;
    this.rendererBuffers = rendererBuffers;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;
  }

  getFacets() {
    return this.facets;
  }

  getProgram() {
    return this.program;
  }
  
  getRendererData() {
    return this.rendererData;
  }
  
  getRendererBuffers() {
    return this.rendererBuffers;
  }

  getUniformLocations() {
    return this.uniformLocations;
  }

  getAttributeLocations() {
    return this.attributeLocations;
  }

  getCount() { return this.rendererData.getCount(); }

  getOffsetsMatrixUniformLocation() { return this.uniformLocations.getOffsetsMatrixUniformLocation(); }

  getRotationsMatrixUniformLocation() { return this.uniformLocations.getRotationsMatrixUniformLocation(); }

  getPositionMatrixUniformLocation() { return this.uniformLocations.getPositionMatrixUniformLocation(); }

  getProjectionMatrixUniformLocation() { return this.uniformLocations.getProjectionMatrixUniformLocation(); }

  getNormalsMatrixUniformLocation() { return this.uniformLocations.getNormalsMatrixUniformLocation(); }

  getVertexPositionAttributeLocation() { return this.attributeLocations.getVertexPositionAttributeLocation(); }

  getVertexNormalAttributeLocation() { return this.attributeLocations.getVertexNormalAttributeLocation(); }

  addFacets(facets) {
    add(this.facets, facets);
  }
}

function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
  const vertexShader = canvas.createVertexShader(vertexShaderSource),
        fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
        program = canvas.createProgram(vertexShader, fragmentShader);
  
  return program;
}

Object.assign(Renderer, {
  createProgram
});

module.exports = Renderer;
