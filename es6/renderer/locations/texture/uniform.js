'use strict';

const UniformLocations = require('../../locations/uniform'),
      fragmentShaderSource = require('../../source/texture/fragmentShader');

const { samplerName } = fragmentShaderSource;

class TextureUniformLocations extends UniformLocations {
  constructor(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation, samplerUniformLocation) {
    super(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation);
    
    this.samplerUniformLocation = samplerUniformLocation;
  }
  
  getSamplerUniformLocation() {
    return this.samplerUniformLocation;
  }

  static fromProgram(program, canvas) {
    const samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureUniformLocations = UniformLocations.fromProgram(TextureUniformLocations, program, canvas, samplerUniformLocation);
    
    return textureUniformLocations;
  }
}

module.exports = TextureUniformLocations;
