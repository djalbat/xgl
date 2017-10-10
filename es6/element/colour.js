'use strict';

const Element = require('../element');

class ColourElement extends Element {
  constructor(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    super();

    this.vertexPositionData = vertexPositionData;
    this.vertexNormalData = vertexNormalData;
    this.vertexIndexData = vertexIndexData;
    this.vertexColourData = vertexColourData;
  }

  getVertexPositionData() {
    return this.vertexPositionData;
  }

  getVertexNormalData() {
    return this.vertexNormalData;
  }

  getVertexIndexData() {
    return this.vertexIndexData;
  }

  getVertexColourData() {
    return this.vertexColourData;
  }

  create(colourShader, textureShader) {
    colourShader.addVertexPositionData(this.vertexPositionData);
    colourShader.addVertexNormalData(this.vertexNormalData);
    colourShader.addVertexIndexData(this.vertexIndexData);
    colourShader.addVertexColourData(this.vertexColourData);
  }

  static fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, ...remainingArguments) {  ///
    const colourElement = new Class(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, ...remainingArguments);
    
    return colourElement;
  }
}

module.exports = ColourElement;
