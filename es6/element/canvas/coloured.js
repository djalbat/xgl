'use strict';

const CanvasElement = require('../../element/canvas');

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

    colourRenderer.addVertexPositions(vertexPositions);
    colourRenderer.addVertexIndexes(vertexIndexes);
    colourRenderer.addVertexNormals(vertexNormals);
    colourRenderer.addVertexColours(vertexColours);

    super.create(colourRenderer, textureRenderer, transforms);
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { colour } = properties,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, colour, ...remainingArguments);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
