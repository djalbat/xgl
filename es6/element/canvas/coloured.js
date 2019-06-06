'use strict';

const ColouredFacet = require('../../primitive/facet/coloured'),
      CanvasElement = require('../../element/canvas');

class ColouredCanvasElement extends CanvasElement {
  render(colourRenderer, textureRenderer) {
    const facets = this.getFacets();

    colourRenderer.addFacets(facets);

    super.render(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments) {
    const indexTuples = indexes,  ///
          facets = indexTuples.map((indexTuple) => {
            const coordinateTuples = coordinates, ///
                  colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour),
                  facet = colouredFacet;  ///

            return facet;
          }),
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, facets, ...remainingArguments);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
