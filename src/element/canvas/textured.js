"use strict";

import CanvasElement from "../../element/canvas";
import TexturedFacet from "../../primitive/facet/textured";

import { add } from "../../utilities/array";
import { scale3 } from "../../maths/vector";

export default class TexturedCanvasElement extends CanvasElement {
  constructor(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    super(transform, facets, mask, hidden);

    this.coordinates = coordinates;

    this.indexes = indexes;

    this.imageName = imageName;

    this.textureCoordinates = textureCoordinates;
  }

  createFacets(hidden, marginOfError) {
    hidden = super.createFacets(hidden, marginOfError);  ///

    if (!hidden) {
      const indexTuples = this.indexes,  ///
          facets = indexTuples.reduce((facets, indexTuple, index) => {
              const vertexTextureCoordinateTuples = this.textureCoordinates[index], ///
                    coordinateTuples = this.coordinates, ///
                    texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, this.imageName, marginOfError),
                    facet = texturedFacet;  ///

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

    textureRenderer.addFacets(facets);

    super.addFacets(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments) { return CanvasElement.fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments); }
}
