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

  create(colourRenderer, textureRenderer) {
    colourRenderer.addVertexPositionData(this.vertexPositionData);
    colourRenderer.addVertexNormalData(this.vertexNormalData);
    colourRenderer.addVertexIndexData(this.vertexIndexData);
    colourRenderer.addVertexColourData(this.vertexColourData);
  }

  static fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, ...remainingArguments) {  ///
    const colourElement = new Class(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData, ...remainingArguments);
    
    return colourElement;
  }
}

module.exports = ColourElement;
