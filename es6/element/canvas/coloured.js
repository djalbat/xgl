'use strict';

const Mask = require('../../element/canvas/mask'),
      CanvasElement = require('../../element/canvas');

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
    super.create(colourRenderer, textureRenderer, transforms);

    const vertexPositions = this.calculateVertexPositions(transforms);

    const childElements = this.getChildElements(),
          mask = childElements.find(function(childElement) {
            const childElementMask = (childElement instanceof Mask);

            return childElementMask;
          });

    if (mask !== undefined) {
      debugger
    }

    const vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

    colourRenderer.addVertexPositions(vertexPositions);
    colourRenderer.addVertexIndexes(vertexIndexes);
    colourRenderer.addVertexNormals(vertexNormals);
    colourRenderer.addVertexColours(vertexColours);
  }

  static fromProperties(Class, properties) {
    const { colour } = properties,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, colour);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
