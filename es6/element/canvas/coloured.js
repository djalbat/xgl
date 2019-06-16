'use strict';

const ColouredFacet = require('../../primitive/facet/coloured'),
      CanvasElement = require('../../element/canvas');

class ColouredCanvasElement extends CanvasElement {
  initialise(colourRenderer, textureRenderer) {
    const facets = this.getFacets();

    colourRenderer.addFacets(facets);

    super.initialise(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments) {
    const colouredCanvasElement = CanvasElement.fromProperties(Class, properties, ...remainingArguments),
          { hidden } = properties;

    if (!hidden) {
      const indexTuples = indexes,  ///
            facets = indexTuples.map((indexTuple) => {
              const coordinateTuples = coordinates, ///
                    colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour),
                    facet = colouredFacet;  ///

              return facet;
            });

      colouredCanvasElement.setFacets(facets);
    }

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
