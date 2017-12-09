'use strict';

const ColouredFacet = require('../../facet/coloured'),
      CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array');

const { push } = arrayUtilities;

class ColouredCanvasElement extends CanvasElement {
  render(colourRenderer, textureRenderer) {
    const vertexPositions = this.getVertexPositions(),
          vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexColours = this.getVertexColours();

    colourRenderer.addVertexPositions(vertexPositions);
    colourRenderer.addVertexIndexes(vertexIndexes);
    colourRenderer.addVertexNormals(vertexNormals);
    colourRenderer.addVertexColours(vertexColours);
  }

  getVertexColours() {
    const facets = this.getFacets(),
          vertexColours = facets.reduce(function(vertexColours, facet) {
            const colouredFacet = facet,  ///
                  colouredFacetVertexColours = colouredFacet.getVertexColours();

            push(vertexColours, colouredFacetVertexColours);

            return vertexColours;
          }, []);

    return vertexColours;
  }

  static fromProperties(Class, properties, vertices, indexes, colour, ...remainingArguments) {
    const colouredFacets = indexes.map(function(indexes) {  ///
            const colouredFacet = ColouredFacet.fromVerticesIndexesAndColour(vertices, indexes, colour);
  
            return colouredFacet;
          }),
          facets = colouredFacets,  ///
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, facets, ...remainingArguments);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
