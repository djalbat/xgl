'use strict';

const Cube = require('../cube');

const vertexColourData = [
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,

        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,

        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,

        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,

        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,

        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0
      ];

class ColourCube extends Cube {
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

  static fromProperties(properties) { return Cube.fromProperties(ColourCube, properties, vertexColourData); }
}

module.exports = ColourCube;
