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

  create(colourRenderer, textureRenderer, transforms, masking) {
    super.create(colourRenderer, textureRenderer, transforms);

    if (!masking) {
      this.render(colourRenderer);
    }
  }

  render(colourRenderer) {
    const vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(),
          vertexNormals = this.calculateVertexNormals(),
          vertexColours = this.calculateVertexColours();

    colourRenderer.addVertexPositions(vertexPositions);
    colourRenderer.addVertexIndexes(vertexIndexes);
    colourRenderer.addVertexNormals(vertexNormals);
    colourRenderer.addVertexColours(vertexColours);
  }

  calculateVertexColours() {
    const facets = this.getFacets(),
          vertexColour = this.colour,
          vertexColours = facets.reduce(function(vertexColours, facet) {
            vertexColours.push(vertexColour);
            vertexColours.push(vertexColour);
            vertexColours.push(vertexColour);

            return vertexColours;
          }, []);

    return vertexColours;
  }

  static fromProperties(Class, properties, vertices, indexes, ...remainingArguments) {
    const { colour } = properties,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, vertices, indexes, colour, ...remainingArguments);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
