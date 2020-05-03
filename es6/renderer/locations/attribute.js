"use strict";

import { vertexNormalAttributeName } from "../source/lighting";
import { vertexPositionAttributeName } from "../source/position";

export default class AttributeLocations {
  constructor(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
    this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
    this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
  }
  
  getVertexPositionAttributeLocation() {
    return this.vertexPositionAttributeLocation;
  }
  
  getVertexNormalAttributeLocation() {
    return this.vertexNormalAttributeLocation;
  }
  
  static fromProgram(Class, program, canvas, ...remainingArguments) {
    const vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName),
          attributeLocations = new Class(vertexPositionAttributeLocation, vertexNormalAttributeLocation, ...remainingArguments);

    return attributeLocations;
  }  
}
