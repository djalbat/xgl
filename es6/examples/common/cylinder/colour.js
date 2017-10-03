'use strict';

const Cylinder = require('../cylinder');

class ColourCylinder extends Cylinder {
  constructor(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    super(vertexPositionData, vertexNormalData, vertexIndexData);
    
    this.vertexColourData = vertexColourData;    
  }
  
  getVertexColourData() {
    return this.vertexColourData;
  }

  create(colourShader, textureShader) {
    const vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData(),
          vertexIndexData = this.getVertexIndexData();
    
    colourShader.addVertexPositionData(vertexPositionData);
    colourShader.addVertexNormalData(vertexNormalData);
    colourShader.addVertexIndexData(vertexIndexData);
    colourShader.addVertexColourData(this.vertexColourData);
  }

  static fromProperties(properties) {
    const { colour } = properties,
          vertexColourData = vertexColourDataFromColour(colour),
          colourCylinder = Cylinder.fromProperties(ColourCylinder, properties, vertexColourData);

    return colourCylinder;
  }
}

module.exports = ColourCylinder;

function vertexColourDataFromColour(colour) {
  let vertexColourData = [];

  for (let index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}
