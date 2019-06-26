'use strict';

const lightingSource = require('../source/lighting'),
      positionSource = require('../source/position');

const { normalsMatrixName } = lightingSource,
      { offsetMatrixName, rotationsMatrixName, positionMatrixName, projectionMatrixName } = positionSource;

class UniformLocations {
  constructor(offsetMatrixUniformLocation, rotationsMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalsMatrixUniformLocation) {
    this.offsetMatrixUniformLocation = offsetMatrixUniformLocation;
    this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
    this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
  }

  getOffsetMatrixUniformLocation() {
    return this.offsetMatrixUniformLocation;    
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
    const offsetMatrixUniformLocation = canvas.getUniformLocation(program, offsetMatrixName),
          rotationsMatrixUniformLocation = canvas.getUniformLocation(program, rotationsMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          normalsMatrixUniformLocation = canvas.getUniformLocation(program, normalsMatrixName),
          uniformLocations = new Class(offsetMatrixUniformLocation, rotationsMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalsMatrixUniformLocation, ...remainingArguments);
    
    return uniformLocations;       
  }
}

module.exports = UniformLocations;
