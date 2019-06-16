'use strict';

const TexturedFacet = require('../../primitive/facet/textured'),
      CanvasElement = require('../../element/canvas');

class TexturedCanvasElement extends CanvasElement {
  initialise(colourRenderer, textureRenderer) {
    const facets = this.getFacets();

    textureRenderer.addFacets(facets);

    super.initialise(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments) {
    const texturedCanvasElement = CanvasElement.fromProperties(Class, properties, ...remainingArguments),
          { hidden } = properties;

    if (!hidden) {
      const indexTuples = indexes,  ///
            facets = indexTuples.map((indexTuple, index) => {
              const vertexTextureCoordinateTuples = textureCoordinates[index], ///
                    coordinateTuples = coordinates, ///
                    texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, imageName),
                    facet = texturedFacet;  ///

              return facet;
            });

      texturedCanvasElement.setFacets(facets);
    }

    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
