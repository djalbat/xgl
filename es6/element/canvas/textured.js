'use strict';

const TexturedFacet = require('../../facet/textured'),
      CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array');

const { push } = arrayUtilities;

class TexturedCanvasElement extends CanvasElement {
  render(colourRenderer, textureRenderer) {
    const vertexPositions = this.getVertexPositions(),
          vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexTextureCoordinates = this.getVertexTextureCoordinates();

    textureRenderer.addVertexPositions(vertexPositions);
    textureRenderer.addVertexIndexes(vertexIndexes);
    textureRenderer.addVertexNormals(vertexNormals);
    textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinates);
  }

  getVertexTextureCoordinates() {
    const facets = this.getFacets(),
          vertexTextureCoordinates = facets.reduce(function(vertexTextureCoordinates, facet) {
            const texturedFacet = facet,  ///
                  texturedFacetVertexTextureCoordinates = texturedFacet.getVertexTextureCoordinates();
  
            push(vertexTextureCoordinates, texturedFacetVertexTextureCoordinates);
  
            return vertexTextureCoordinates;
          }, []);

    return vertexTextureCoordinates;
  }

  static fromProperties(Class, properties, vertices, indexes, imageName, textureCoordinates, ...remainingArguments) {
    const texturedFacets = indexes.map(function(indexes, index) {  ///
          const texturedFacet = TexturedFacet.fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index);
  
            return texturedFacet;
          }),
          facets = texturedFacets,  ///
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, facets, ...remainingArguments);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
