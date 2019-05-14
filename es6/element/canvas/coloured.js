'use strict';

const ColouredFacet = require('../../primitive/facet/coloured'),
      CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array');

const { push } = arrayUtilities;

class ColouredCanvasElement extends CanvasElement {
  render(colourRenderer, textureRenderer) {
    const vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexColours = this.getVertexColours(),
          vertexPositions = this.getVertexPositions();

    colourRenderer.addVertexPositions(vertexPositions);

    colourRenderer.addVertexIndexes(vertexIndexes);

    colourRenderer.addVertexNormals(vertexNormals);

    colourRenderer.addVertexColours(vertexColours);

    super.render(colourRenderer, textureRenderer);
  }

  getVertexColours() {
    const facets = this.getFacets(),
          vertexColours = facets.reduce((vertexColours, facet) => {
            const colouredFacet = facet,  ///
                  colouredFacetVertexColours = colouredFacet.getVertexColours();

            push(vertexColours, colouredFacetVertexColours);

            return vertexColours;
          }, []);

    return vertexColours;
  }

  static fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments) {
    const indexTuples = indexes,  ///
          coordinateTuples = coordinates, ///
          colouredFacets = indexTuples.map((indexTuple) => {
            const colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour);

            return colouredFacet;
          }),
          facets = colouredFacets,  ///
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, facets, ...remainingArguments);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
