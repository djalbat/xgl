'use strict';

const vertexPositionAttributeName = 'aVertexPosition',
      vertexNormalAttributeName = 'aVertexNormal';

class AttributeLocations {
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
  
  static fromProgram(program, canvas) {
    const vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName),
          attributeLocations = new AttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation);

    return attributeLocations;
  }  
}

Object.assign(AttributeLocations, {
  vertexPositionAttributeName: vertexPositionAttributeName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = AttributeLocations;
