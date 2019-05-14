'use strict';

const TexturedFacet = require('../../primitive/facet/textured'),
      CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array');

const { push } = arrayUtilities;

class TexturedCanvasElement extends CanvasElement {
  render(colourRenderer, textureRenderer) {
    const imageJSON = textureRenderer.getImageJSON(),
					vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexPositions = this.getVertexPositions(),
          vertexTextureCoordinates = this.getVertexTextureCoordinates(imageJSON);

    textureRenderer.addVertexPositions(vertexPositions);

    textureRenderer.addVertexIndexes(vertexIndexes);

    textureRenderer.addVertexNormals(vertexNormals);

    textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinates);

    super.render(colourRenderer, textureRenderer);
  }

  getVertexTextureCoordinates(imageJSON) {
    const facets = this.getFacets(),
          vertexTextureCoordinates = facets.reduce((vertexTextureCoordinates, facet) => {
            const texturedFacet = facet,  ///
                  texturedFacetVertexTextureCoordinates = texturedFacet.getVertexTextureCoordinates(imageJSON);
  
            push(vertexTextureCoordinates, texturedFacetVertexTextureCoordinates);
  
            return vertexTextureCoordinates;
          }, []);

    return vertexTextureCoordinates;
  }

  static fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments) {
    const indexTuples = indexes,  ///
          coordinateTuples = coordinates, ///
          textureCoordinateTuples = textureCoordinates, ///
          texturedFacets = indexTuples.map((indexTuple, index) => {
            const textureCoordinateTuple = textureCoordinateTuples[index],
                  texturedFacet = TexturedFacet.fromTextureCoordinateTupleCoordinateTuplesIndexTupleAndImageName(textureCoordinateTuple, coordinateTuples, indexTuple, imageName);

            return texturedFacet;
          }),
          facets = texturedFacets,  ///
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, facets, ...remainingArguments);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
