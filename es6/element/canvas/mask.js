'use strict';

const CanvasElement = require('../../element/canvas');

const colour = [ 1, 1, 1, 1 ],
      initialVertexPositions = [

        [ 0.0, 0.0, 0.0 ],
        [ 0.0, 1.0, 0.0 ],
        [ 0.0, 1.0, 1.0 ],
        [ 0.0, 0.0, 1.0 ],
      
      ];

class Mask extends CanvasElement {
  calculateVertexColours(vertexPositions) {
    const vertexPositionsLength = vertexPositions.length,
          vertexColoursLength = vertexPositionsLength,  ///
          vertexColour = colour,
          vertexColours = [];

    for (let index = 0; index < vertexColoursLength; index++) {
      vertexColours.push(vertexColour);
    }

    return vertexColours;
  }

  getInitialVertexPositions() {
    return initialVertexPositions;
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

  static fromProperties(properties) { return CanvasElement.fromProperties(Mask, properties); }
}

module.exports = Mask;
