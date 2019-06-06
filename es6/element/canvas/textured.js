'use strict';

const TexturedFacet = require('../../primitive/facet/textured'),
      CanvasElement = require('../../element/canvas');

class TexturedCanvasElement extends CanvasElement {
  render(colourRenderer, textureRenderer) {
    const facets = this.getFacets();

    textureRenderer.addFacets(facets);

    super.render(colourRenderer, textureRenderer);
  }

  static fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments) {
    const indexTuples = indexes,  ///
          facets = indexTuples.map((indexTuple, index) => {
            const coordinateTuples = coordinates, ///
                  vertexTextureCoordinateTuples = textureCoordinates[index], ///
                  texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, imageName),
                  facet = texturedFacet;  ///

            return facet;
          }),
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, facets, ...remainingArguments);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
