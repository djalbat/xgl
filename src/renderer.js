"use strict";

import { push } from "./utilities/array";

export default class Renderer {
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

  getNormalsMatrixUniformLocation() { return this.uniformLocations.getNormalsMatrixUniformLocation(); }

  getPositionMatrixUniformLocation() { return this.uniformLocations.getPositionMatrixUniformLocation(); }

  getRotationsMatrixUniformLocation() { return this.uniformLocations.getRotationsMatrixUniformLocation(); }

  getProjectionMatrixUniformLocation() { return this.uniformLocations.getProjectionMatrixUniformLocation(); }

  getVertexPositionAttributeLocation() { return this.attributeLocations.getVertexPositionAttributeLocation(); }

  getVertexNormalAttributeLocation() { return this.attributeLocations.getVertexNormalAttributeLocation(); }

  addFacets(facets) {
    push(this.facets, facets);
  }
}

export function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
  const vertexShader = canvas.createVertexShader(vertexShaderSource),
        fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
        program = canvas.createProgram(vertexShader, fragmentShader);
  
  return program;
}
