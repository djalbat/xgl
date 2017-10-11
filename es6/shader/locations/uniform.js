'use strict';

const offsetMatrixName = 'uOffsetMatrix',
      rotationMatrixName = 'uRotationMatrix',
      positionMatrixName = 'uPositionMatrix',
      projectionMatrixName = 'uPerspectiveMatrix',
      normalMatrixName = 'uNormalMatrix';

class UniformLocations {
  constructor(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation) {
    this.offsetMatrixUniformLocation = offsetMatrixUniformLocation;
    this.rotationMatrixUniformLocation = rotationMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
    this.normalMatrixUniformLocation = normalMatrixUniformLocation;
  }

  getOffsetMatrixUniformLocation() {
    return this.offsetMatrixUniformLocation;    
  }
  
  getRotationMatrixUniformLocation() {
    return this.rotationMatrixUniformLocation;
  }

  getPositionMatrixUniformLocation() {
    return this.positionMatrixUniformLocation;
  }

  getProjectionMatrixUniformLocation() {
    return this.projectionMatrixUniformLocation;
  }

  getNormalMatrixUniformLocation() {
    return this.normalMatrixUniformLocation;
  }

  static fromProgram(program, canvas) {
    const offsetMatrixUniformLocation = canvas.getUniformLocation(program, offsetMatrixName),
          rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName),
          uniformLocations = new UniformLocations(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation);
    
    return uniformLocations;       
  }
}

Object.assign(UniformLocations, {
  offsetMatrixName: offsetMatrixName,
  rotationMatrixName: rotationMatrixName,
  positionMatrixName: positionMatrixName,
  projectionMatrixName: projectionMatrixName,
  normalMatrixName: normalMatrixName,
});

module.exports = UniformLocations;
