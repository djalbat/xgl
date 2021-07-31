"use strict";

import CanvasElement from "../../element/canvas";
import TexturedFacet from "../../primitive/facet/textured";

export default class TexturedCanvasElement extends CanvasElement {
  constructor(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    super(transform, facets, mask, hidden);

    this.coordinates = coordinates;

    this.indexes = indexes;

    this.imageName = imageName;

    this.textureCoordinates = textureCoordinates;
  }

  createFacets(hidden, magnification) {
    hidden = super.createFacets(hidden, magnification);  ///

    if (!hidden) {
      const indexTuples = this.indexes,  ///
            facets = indexTuples.map((indexTuple, index) => {
              const vertexTextureCoordinateTuples = this.textureCoordinates[index], ///
                    coordinateTuples = this.coordinates, ///
                    texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMagnification(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, this.imageName, magnification),
                    facet = texturedFacet;  ///

              return facet;
            });

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
