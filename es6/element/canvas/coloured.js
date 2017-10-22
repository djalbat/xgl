'use strict';

const CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array');

const { flatten } = arrayUtilities;

class ColouredCanvasElement extends CanvasElement {
  constructor(transform, colour) {
    super(transform);

    this.colour = colour;
  }

  calculateVertexColours(vertexPositions) {
    const vertexPositionsLength = vertexPositions.length,
          vertexColoursLength = vertexPositionsLength,  ///
          vertexColour = this.colour,
          vertexColours = [];

    for (let index = 0; index < vertexColoursLength; index++) {
      vertexColours.push(vertexColour);
    }

    return vertexColours;
  }

  create(colourRenderer, textureRenderer, transforms) {
    const vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

    const vertexPositionData = flatten(vertexPositions),
          vertexNormalData = flatten(vertexNormals),
          vertexColourData = flatten(vertexColours),
          vertexIndexData = vertexIndexes;

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
