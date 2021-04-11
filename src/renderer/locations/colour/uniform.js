"use strict";

import UniformLocations from "../../locations/uniform";

export default class ColourUniformLocations extends UniformLocations {
  static fromProgram(program, canvas) { return UniformLocations.fromProgram(ColourUniformLocations, program, canvas); }
}
