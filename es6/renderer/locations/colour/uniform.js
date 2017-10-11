'use strict';

const UniformLocations = require('../../locations/uniform');

class ColourUniformLocations extends UniformLocations {
  static fromProgram(program, canvas) { return UniformLocations.fromProgram(ColourUniformLocations, program, canvas); }
}

module.exports = ColourUniformLocations;
