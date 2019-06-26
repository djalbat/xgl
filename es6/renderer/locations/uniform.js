'use strict';

const lightingSource = require('../source/lighting'),
      positionSource = require('../source/position');

const { normalsMatrixName } = lightingSource,
      { offsetsMatrixName, rotationsMatrixName, positionMatrixName, projectionMatrixName } = positionSource;

class UniformLocations {
  constructor(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
    this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
    this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
  }

  getOffsetsMatrixUniformLocation() {
    return this.offsetsMatrixUniformLocation;
  }

  getNormalsMatrixUniformLocation() {
    return this.normalsMatrixUniformLocation;
  }

  getPositionMatrixUniformLocation() {
    return this.positionMatrixUniformLocation;
  }

  getRotationsMatrixUniformLocation() {
    return this.rotationsMatrixUniformLocation;
  }

  getProjectionMatrixUniformLocation() {
    return this.projectionMatrixUniformLocation;
  }

  static fromProgram(Class, program, canvas, ...remainingArguments) {
    const offsetsMatrixUniformLocation = canvas.getUniformLocation(program, offsetsMatrixName),
          normalsMatrixUniformLocation = canvas.getUniformLocation(program, normalsMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          rotationsMatrixUniformLocation = canvas.getUniformLocation(program, rotationsMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          uniformLocations = new Class(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, ...remainingArguments);
    
    return uniformLocations;       
  }
}

module.exports = UniformLocations;
