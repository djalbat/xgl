"use strict";

import CanvasElement from "../../element/canvas";
import ColouredFacet from "../../primitive/facet/coloured";

import { add } from "../../utilities/array";
import { scale3 } from "../../maths/vector";

export default class ColouredCanvasElement extends CanvasElement {
  constructor(transform, facets, mask, hidden, coordinates, indexes, colour) {
    super(transform, facets, mask, hidden);

    this.coordinates = coordinates;

    this.indexes = indexes;

    this.colour = colour;
  }

  magnify(magnification) {
    let coordinateTuples = this.coordinates; ///

    coordinateTuples = coordinateTuples.map((coordinateTuple) => {
      coordinateTuple = scale3(coordinateTuple, magnification);

      return coordinateTuple;
    });

    this.coordinates = coordinateTuples;  ///

    super.magnify(magnification);
  }

  createFacets(hidden) {
    hidden = super.createFacets(hidden);  ///

    if (!hidden) {
      const indexTuples = this.indexes,  ///
            facets = indexTuples.reduce((facets, indexTuple) => {
              const coordinateTuples = this.coordinates, ///
                    colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, this.colour),
                    facet = colouredFacet;  ///

              if (facet !== null) {
                add(facets, facet);
              }

              return facets;
            }, []);

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
