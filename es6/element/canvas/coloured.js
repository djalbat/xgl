'use strict';

const CanvasElement = require('../../element/canvas');

class ColouredCanvasElement extends CanvasElement {
  constructor(facets, transform, colour) {
    super(facets, transform);

    this.colour = colour;
  }

  getColour() {
    return this.colour;
  }

  calculateVertexColours() {
    const facets = this.getFacets(),
          facetsLength = facets.length,
          vertexColoursLength = facetsLength * 3,  ///
          vertexColour = this.colour,
          vertexColours = [];

    for (let index = 0; index < vertexColoursLength; index++) {
      vertexColours.push(vertexColour);
    }

    return vertexColours;
  }

  create(colourRenderer, textureRenderer, transforms) {
    super.create(colourRenderer, textureRenderer, transforms);
    
    const vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(),
          vertexNormals = this.calculateVertexNormals(),
          vertexColours = this.calculateVertexColours();

    colourRenderer.addVertexPositions(vertexPositions);
    colourRenderer.addVertexIndexes(vertexIndexes);
    colourRenderer.addVertexNormals(vertexNormals);
    colourRenderer.addVertexColours(vertexColours);
  }

  static fromProperties(Class, properties, facets, ...remainingArguments) {
    const { colour } = properties,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, facets, colour, ...remainingArguments);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
