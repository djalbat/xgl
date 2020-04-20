"use strict";

import UniformLocations from "../../locations/uniform";

class ColourUniformLocations extends UniformLocations {
  static fromProgram(program, canvas) { return UniformLocations.fromProgram(ColourUniformLocations, program, canvas); }
}

module.exports = ColourUniformLocations;
