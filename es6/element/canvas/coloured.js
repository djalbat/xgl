"use strict";

const ColouredFacet = require("../../primitive/facet/coloured"),
      CanvasElement = require("../../element/canvas");

class ColouredCanvasElement extends CanvasElement {
  constructor(transform, facets, mask, hidden, coordinates, indexes, colour) {
    super(transform, facets, mask, hidden);

    this.coordinates = coordinates;

    this.indexes = indexes;

    this.colour = colour;
  }

  createFacets(hidden) {
    hidden = super.createFacets(hidden);  ///

    if (!hidden) {
      const indexTuples = this.indexes,  ///
            facets = indexTuples.map((indexTuple) => {
              const coordinateTuples = this.coordinates, ///
                    colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, this.colour),
                    facet = colouredFacet;  ///

              return facet;
            });

      this.setFacets(facets);
    }
  }

  addFacets(colourRenderer, textureRenderer) {
    const facets = this.getFacets();

    colourRenderer.addFacets(facets);

    super.addFacets(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments) { return CanvasElement.fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments); }
}

module.exports = ColouredCanvasElement;
