"use strict";

import CanvasElement from "../../element/canvas";
import ColouredFacet from "../../primitive/facet/coloured";

import { add } from "../../utilities/array";

export default class ColouredCanvasElement extends CanvasElement {
  constructor(maskReference, transform, facets, masks, coordinates, indexes, colour) {
    super(maskReference, transform, facets, masks);

    this.coordinates = coordinates;
    this.indexes = indexes;
    this.colour = colour;
  }

  createFacets(marginOfError) {
    super.createFacets(marginOfError);

    const indexTuples = this.indexes,  ///
          facets = indexTuples.reduce((facets, indexTuple) => {
            const coordinateTuples = this.coordinates, ///
                  colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, this.colour, marginOfError),
                  facet = colouredFacet;  ///

            if (facet !== null) {
              add(facets, facet);
            }

            return facets;
          }, []);

    this.setFacets(facets);
  }

  addFacets(colourRenderer, textureRenderer) {
    const facets = this.getFacets();

    colourRenderer.addFacets(facets);

    super.addFacets(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments) { return CanvasElement.fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments); }
}
