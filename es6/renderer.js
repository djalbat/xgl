'use strict';

class Renderer {
  constructor(program, uniformLocations, attributeLocations, rendererData, rendererBuffers) {
    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;
    this.rendererData = rendererData;
    this.rendererBuffers = rendererBuffers;
  }

  getProgram() {
    return this.program;
  }
  
  getUniformLocations() {
    return this.uniformLocations;
  }
  
  getAttributeLocations() {
    return this.attributeLocations;
  }
  
  getRendererData() {
    return this.rendererData;
  }
  
  getRendererBuffers() {
    return this.rendererBuffers;
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

  createBuffers(canvas) { 
    const vertexPositionsData = this.rendererData.getVertexPositionsData(),
          vertexNormalsData = this.rendererData.getVertexNormalsData(),
          vertexIndexesData = this.rendererData.getVertexIndexesData();
    
    this.rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas); 
  }

  bindBuffers(canvas) { 
    const vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), 
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation();
    
    this.rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas); 
  }
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
