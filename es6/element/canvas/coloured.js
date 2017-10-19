'use strict';

const CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array');

const { flatten } = arrayUtilities;

class ColouredCanvasElement extends CanvasElement {
  constructor(transform, childElements, colour) {
    super(transform, childElements);

    this.colour = colour;
  }

  calculateVertexColourData(vertexPositionData) {
    const vertexPositionDataLength = vertexPositionData.length,
          vertexColoursLength = vertexPositionDataLength / 3,  ///
          vertexColour = this.colour,
          vertexColours = [];

    for (let index = 0; index < vertexColoursLength; index++) {
      vertexColours.push(vertexColour);
    }

    const vertexColourData = flatten(vertexColours);  ///

    return vertexColourData;
  }

  create(colourRenderer, textureRenderer, transforms) {
    const vertexPositionData = this.calculateVertexPositionData(transforms),
          vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
          vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
          vertexColourData = this.calculateVertexColourData(vertexPositionData);

    colourRenderer.addVertexPositionData(vertexPositionData);
    colourRenderer.addVertexIndexData(vertexIndexData);
    colourRenderer.addVertexNormalData(vertexNormalData);
    colourRenderer.addVertexColourData(vertexColourData);

    super.create(colourRenderer, textureRenderer, transforms);
  }

  static fromProperties(Class, properties) {
    const { colour } = properties,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, colour);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
