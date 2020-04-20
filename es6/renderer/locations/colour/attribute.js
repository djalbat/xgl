"use strict";

const AttributeLocations = require("../../locations/attribute"),
      vertexShaderSource = require("../../source/colour/vertexShader");

const { vertexColourAttributeName } = vertexShaderSource;

class ColourAttributeLocations extends AttributeLocations {
  constructor(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
    super(vertexPositionAttributeLocation, vertexNormalAttributeLocation);

    this.vertexColourAttributeLocation = vertexColourAttributeLocation;
  }

  getVertexColourAttributeLocation() {
    return this.vertexColourAttributeLocation;
  }
  
  static fromProgram(program, canvas) {
    const vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourAttributeLocations = AttributeLocations.fromProgram(ColourAttributeLocations, program, canvas, vertexColourAttributeLocation);

    return colourAttributeLocations;
  }
}

module.exports = ColourAttributeLocations;
