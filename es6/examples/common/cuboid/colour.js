'use strict';

const Cuboid = require('../cuboid');

class ColourCuboid extends Cuboid {
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
          colourCuboid = Cuboid.fromProperties(ColourCuboid, properties, vertexColourData);

    return colourCuboid;
  }
}

module.exports = ColourCuboid;

function vertexColourDataFromColour(colour) {
  let vertexColourData = [];

  for (let index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}
