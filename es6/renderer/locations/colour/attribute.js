'use strict';

const AttributeLocations = require('../../locations/attribute');

class ColourAttributeLocations extends AttributeLocations {
  static fromProgram(program, canvas) { return AttributeLocations.fromProgram(ColourAttributeLocations, program, canvas); }  
}

module.exports = ColourAttributeLocations;
