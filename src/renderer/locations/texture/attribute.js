"use strict";

import AttributeLocations from "../../locations/attribute";

import { textureCoordinateAttributeName } from "../../source/texture/vertexShader";

export default class TextureAttributeLocations extends AttributeLocations {
  constructor(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
    super(vertexPositionAttributeLocation, vertexNormalAttributeLocation);
    
    this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
  }
  
  getTextureCoordinateAttributeLocation() {
    return this.textureCoordinateAttributeLocation;
  }
  
  static fromProgram(program, canvas) {
    const textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureAttributeLocations = AttributeLocations.fromProgram(TextureAttributeLocations, program, canvas, textureCoordinateAttributeLocation);
    
    return textureAttributeLocations;
  }  
}
