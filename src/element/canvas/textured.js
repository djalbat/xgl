"use strict";

import CanvasElement from "../../element/canvas";
import TexturedFacet from "../../primitive/facet/textured";

import { scale3 } from "../../maths/vector";

export default class TexturedCanvasElement extends CanvasElement {
  constructor(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    super(transform, facets, mask, hidden);

    this.coordinates = coordinates;

    this.indexes = indexes;

    this.imageName = imageName;

    this.textureCoordinates = textureCoordinates;
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
            facets = indexTuples.map((indexTuple, index) => {
              const vertexTextureCoordinateTuples = this.textureCoordinates[index], ///
                    coordinateTuples = this.coordinates, ///
                    texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, this.imageName),
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
