'use strict';

class Renderer {
  constructor(program, uniformLocations, attributeLocations, rendererData) {
    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;
    
    this.rendererData = rendererData;

    this.vertexPositionsBuffer = null; ///
    this.vertexNormalsBuffer = null; ///
    this.vertexIndexesElementBuffer = null; ///
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
    this.createVertexPositionBuffer(canvas);
    this.createVertexNormalBuffer(canvas);
    this.createVertexIndexElementBuffer(canvas);
  }

  bindBuffers(canvas) {
    this.bindVertexNormalBuffer(canvas);
    this.bindVertexPositionBuffer(canvas);
    this.bindVertexIndexElementBuffer(canvas);
  }

  createVertexPositionBuffer(canvas) {
    const vertexPositionsData = this.rendererData.getVertexPositionsData();
    
    this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
  }

  createVertexNormalBuffer(canvas) {
    const vertexNormalsData = this.rendererData.getVertexNormalsData();
    
    this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
  }

  createVertexIndexElementBuffer(canvas) {
    const vertexIndexesData = this.rendererData.getVertexIndexesData();
    
    this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
  }

  bindVertexPositionBuffer(canvas) {
    const vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexPositionComponents = 3;
    
    canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
  }

  bindVertexNormalBuffer(canvas) {
    const vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexNormalComponents = 3;

    canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
  }

  bindVertexIndexElementBuffer(canvas) {
    canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
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
