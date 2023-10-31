"use strict";

import CanvasElement from "../../element/canvas";
import TexturedFacet from "../../primitive/facet/textured";

export default class TexturedCanvasElement extends CanvasElement {
  constructor(maskReference, transform, facets, masks, coordinates, indexes, imageName, textureCoordinates) {
    super(maskReference, transform, facets, masks);

    this.coordinates = coordinates;
    this.indexes = indexes;
    this.imageName = imageName;
    this.textureCoordinates = textureCoordinates;
  }

  createFacets(marginOfError) {
    super.createFacets(marginOfError);

    const indexTuples = this.indexes,  ///
          facets = indexTuples.reduce((facets, indexTuple, index) => {
              const vertexTextureCoordinateTuples = this.textureCoordinates[index], ///
                    coordinateTuples = this.coordinates, ///
                    texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, this.imageName, marginOfError),
                    facet = texturedFacet;  ///

            if (facet !== null) {
              facets.push(facet);
            }

            return facets;
          }, []);

    this.setFacets(facets);
  }

  addFacets(colourRenderer, textureRenderer) {
    const facets = this.getFacets();

    textureRenderer.addFacets(facets);

    super.addFacets(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments) { return CanvasElement.fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments); }
}
