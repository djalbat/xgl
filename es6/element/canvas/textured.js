'use strict';

const TexturedFacet = require('../../primitive/facet/textured'),
      CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array');

const { push } = arrayUtilities;

class TexturedCanvasElement extends CanvasElement {
  render(colourRenderer, textureRenderer) {
    const imageMapJSON = textureRenderer.getImageMapJSON(),
					vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexPositions = this.getVertexPositions(),
          vertexTextureCoordinatesTuples = this.getVertexTextureCoordinatesTuples(imageMapJSON);

    textureRenderer.addVertexPositions(vertexPositions);

    textureRenderer.addVertexIndexes(vertexIndexes);

    textureRenderer.addVertexNormals(vertexNormals);

    textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinatesTuples);

    super.render(colourRenderer, textureRenderer);
  }

  getVertexTextureCoordinatesTuples(imageMapJSON) {
    const facets = this.getFacets(),
          vertexTextureCoordinatesTuples = facets.reduce((vertexTextureCoordinatesTuples, facet) => {
            const texturedFacet = facet,  ///
                  texturedFacetVertexTextureCoordinatesTuples = texturedFacet.getVertexTextureCoordinatesTuple(imageMapJSON);
  
            push(vertexTextureCoordinatesTuples, texturedFacetVertexTextureCoordinatesTuples);
  
            return vertexTextureCoordinatesTuples;
          }, []);

    return vertexTextureCoordinatesTuples;
  }

  static fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments) {
    const indexTuples = indexes,  ///
          coordinateTuples = coordinates, ///
          textureCoordinatesTuples = textureCoordinates, ///
          texturedFacets = indexTuples.map((indexTuple, index) => {
            const textureCoordinatesTuple = textureCoordinatesTuples[index],
                  texturedFacet = TexturedFacet.fromTextureCoordinateTupleCoordinatesTuplesIndexTupleAndImageName(textureCoordinatesTuple, coordinateTuples, indexTuple, imageName);

            return texturedFacet;
          }),
          facets = texturedFacets,  ///
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, facets, ...remainingArguments);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
