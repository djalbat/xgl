'use strict';

const UniformLocations = require('../../locations/uniform'),
      fragmentShaderSource = require('../../source/texture/fragmentShader');

const { samplerName } = fragmentShaderSource;

class TextureUniformLocations extends UniformLocations {
  constructor(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
    super(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation);
    
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
