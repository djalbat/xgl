'use strict';

const Element = require('../element');

class ColourElement extends Element {
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

  static fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, ...remainingArguments) {  ///
    const colourElement = new Class(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, ...remainingArguments);
    
    return colourElement;
  }
}

module.exports = ColourElement;
