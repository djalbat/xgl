'use strict';

const UniformLocations = require('../../locations/uniform'),
      fragmentShaderSource = require('../../source/texture/fragmentShader');

const { samplerName } = fragmentShaderSource;

class TextureUniformLocations extends UniformLocations {
  constructor(offsetsMatrixUniformLocation, rotationsMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalsMatrixUniformLocation, samplerUniformLocation) {
    super(offsetsMatrixUniformLocation, rotationsMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalsMatrixUniformLocation);
    
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
