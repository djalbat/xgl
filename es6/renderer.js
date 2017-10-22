'use strict';

class Renderer {
  constructor(program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
    this.program = program;
    this.rendererData = rendererData;
    this.rendererBuffers = rendererBuffers;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;
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

  getOffsetMatrixUniformLocation() { return this.uniformLocations.getOffsetMatrixUniformLocation(); }

  getRotationMatrixUniformLocation() { return this.uniformLocations.getRotationMatrixUniformLocation(); }

  getPositionMatrixUniformLocation() { return this.uniformLocations.getPositionMatrixUniformLocation(); }

  getProjectionMatrixUniformLocation() { return this.uniformLocations.getProjectionMatrixUniformLocation(); }

  getNormalMatrixUniformLocation() { return this.uniformLocations.getNormalMatrixUniformLocation(); }

  getVertexPositionAttributeLocation() { return this.attributeLocations.getVertexPositionAttributeLocation(); }

  getVertexNormalAttributeLocation() { return this.attributeLocations.getVertexNormalAttributeLocation(); }

  addVertexPositions(vertexPositions) { this.rendererData.addVertexPositions(vertexPositions); }

  addVertexNormals(vertexNormals) { this.rendererData.addVertexNormals(vertexNormals); }

  addVertexIndexes(vertexIndexes) { this.rendererData.addVertexIndexes(vertexIndexes); }
}

function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
  const vertexShader = canvas.createVertexShader(vertexShaderSource),
        fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
        program = canvas.createProgram(vertexShader, fragmentShader);
  
  return program;
}

Object.assign(Renderer, {
  createProgram: createProgram
});

module.exports = Renderer;
