"use strict";

const AttributeLocations = require("../../locations/attribute"),
      vertexShaderSource = require("../../source/texture/vertexShader");

const { textureCoordinateAttributeName } = vertexShaderSource;

class TextureAttributeLocations extends AttributeLocations {
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

module.exports = TextureAttributeLocations;
