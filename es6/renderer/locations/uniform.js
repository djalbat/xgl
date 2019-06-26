'use strict';

const lightingSource = require('../source/lighting'),
      positionSource = require('../source/position');

const { normalsMatrixName } = lightingSource,
      { offsetsMatrixName, rotationsMatrixName, positionMatrixName, projectionMatrixName } = positionSource;

class UniformLocations {
  constructor(offsetsMatrixUniformLocation, rotationsMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalsMatrixUniformLocation) {
    this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
    this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
    this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
  }

  getOffsetsMatrixUniformLocation() {
    return this.offsetsMatrixUniformLocation;
  }
  
  getRotationsMatrixUniformLocation() {
    return this.rotationsMatrixUniformLocation;
  }

  getPositionMatrixUniformLocation() {
    return this.positionMatrixUniformLocation;
  }

  getProjectionMatrixUniformLocation() {
    return this.projectionMatrixUniformLocation;
  }

  getNormalsMatrixUniformLocation() {
    return this.normalsMatrixUniformLocation;
  }

  static fromProgram(Class, program, canvas, ...remainingArguments) {
    const offsetsMatrixUniformLocation = canvas.getUniformLocation(program, offsetsMatrixName),
          rotationsMatrixUniformLocation = canvas.getUniformLocation(program, rotationsMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          normalsMatrixUniformLocation = canvas.getUniformLocation(program, normalsMatrixName),
          uniformLocations = new Class(offsetsMatrixUniformLocation, rotationsMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalsMatrixUniformLocation, ...remainingArguments);
    
    return uniformLocations;       
  }
}

module.exports = UniformLocations;
