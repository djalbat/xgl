'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

class Renderer {
  constructor(program, uniformLocations, attributeLocations) {
    this.program = program;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;

    this.vertexPositionData = [];
    this.vertexNormalData = [];
    this.vertexIndexData = [];
    this.maximumVertexIndex = -1; ///
  }

  getCount() {
    const vertexIndexDataLength = this.vertexIndexData.length,
          count = vertexIndexDataLength;  ///

    return count;
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
  
  getOffsetMatrixUniformLocation() { return this.uniformLocations.getOffsetMatrixUniformLocation(); }

  getRotationMatrixUniformLocation() { return this.uniformLocations.getRotationMatrixUniformLocation(); }

  getPositionMatrixUniformLocation() { return this.uniformLocations.getPositionMatrixUniformLocation(); }

  getProjectionMatrixUniformLocation() { return this.uniformLocations.getProjectionMatrixUniformLocation(); }

  getNormalMatrixUniformLocation() { return this.uniformLocations.getNormalMatrixUniformLocation(); }

  getVertexPositionAttributeLocation() { return this.attributeLocations.getVertexPositionAttributeLocation(); }

  getVertexNormalAttributeLocation() { return this.attributeLocations.getVertexNormalAttributeLocation(); }

  addVertexPositionData(vertexPositionData) {
    add(this.vertexPositionData, vertexPositionData);
  }

  addVertexNormalData(vertexNormalData) {
    add(this.vertexNormalData, vertexNormalData);
  }

  addVertexIndexData(vertexIndexData) {
    const offset = this.maximumVertexIndex + 1;

    vertexIndexData = vertexIndexData.map(function(vertexIndex) {
      return vertexIndex + offset;
    });

    add(this.vertexIndexData, vertexIndexData);

    this.maximumVertexIndex = Math.max(this.maximumVertexIndex, ...vertexIndexData);
  }

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
    this.vertexPositionBuffer = canvas.createBuffer(this.vertexPositionData);
  }

  createVertexNormalBuffer(canvas) {
    this.vertexNormalBuffer = canvas.createBuffer(this.vertexNormalData);
  }

  createVertexIndexElementBuffer(canvas) {
    this.vertexIndexElementBuffer = canvas.createElementBuffer(this.vertexIndexData);
  }

  bindVertexPositionBuffer(canvas) {
    const vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexPositionComponents = 3;
    
    canvas.bindBuffer(this.vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
  }

  bindVertexNormalBuffer(canvas) {
    const vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexNormalComponents = 3;

    canvas.bindBuffer(this.vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
  }

  bindVertexIndexElementBuffer(canvas) {
    canvas.bindElementBuffer(this.vertexIndexElementBuffer);
  }
}

module.exports = Renderer;
