'use strict';

const UniformLocations = require('../../locations/uniform'),
      vertexShaderSource = require('../source/colour/vertex');

const { vertexColourAttributeName } = vertexShaderSource;

class ColourUniformLocations extends UniformLocations {
  constructor(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation, vertexColourAttributeLocation) {
    super(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation);
    
    this.vertexColourAttributeLocation = vertexColourAttributeLocation;
  }
  
  getVertexColourAttributeLocation() {
    return this.vertexColourAttributeLocation;
  }

  static fromProgram(program, canvas) {
    const vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourUniformLocations = UniformLocations.fromProgram(ColourUniformLocations, program, canvas, vertexColourAttributeLocation);
    
    return colourUniformLocations;
  }
}

module.exports = ColourUniformLocations;
