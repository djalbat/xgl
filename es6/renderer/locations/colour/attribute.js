"use strict";

import AttributeLocations from "../../locations/attribute";

import { vertexColourAttributeName } from "../../source/colour/vertexShader";

export default class ColourAttributeLocations extends AttributeLocations {
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
