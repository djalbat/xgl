'use strict';

const TexturedFacet = require('../../primitive/facet/textured'),
      CanvasElement = require('../../element/canvas');

class TexturedCanvasElement extends CanvasElement {
  constructor(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    super(transform, facets, mask, hidden);

    this.coordinates = coordinates;

    this.indexes = indexes;

    this.imageName = imageName;

    this.textureCoordinates = textureCoordinates;
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

module.exports = TexturedCanvasElement;
