'use strict';

const arrayUtilities = require('../../utilities/array'),
      TextureRenderer = require('../../renderer/texture');

const { push } = arrayUtilities;

const add = push; ///

class ImagesTextureRenderer extends TextureRenderer {
	constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, textureOffsets) {
		super(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

		this.imageNames = imageNames;

		this.textureOffsets = textureOffsets;
	}

  createBuffers(canvas) {
    const facets = this.getFacets(),
          vertexIndexesMap = {},
          vertexNormalsMap = {},
          vertexPositionsMap = {},
          vertexTextureCoordinateTuplesMap = {};

    this.imageNames.forEach((imageName) => {
      vertexIndexesMap[imageName] = [];
      vertexNormalsMap[imageName] = [];
      vertexPositionsMap[imageName] = [];
      vertexTextureCoordinateTuplesMap[imageName] = [];
    });

    facets.forEach((facet, index) => {
      const texturedFacet = facet,  ///
            facetVertexIndexes = facet.getVertexIndexes(index),
            facetVertexNormals = facet.getVertexNormals(),
            facetVertexPositions = facet.getVertexPositions(),
            texturedFacetImageName = texturedFacet.getImageName(),
            texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(),
            texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples,  ///
            imageName = texturedFacetImageName, ///
            vertexIndexes = vertexIndexesMap[imageName],
            vertexNormals = vertexNormalsMap[imageName],
            vertexPositions = vertexPositionsMap[imageName],
            vertexTextureCoordinateTuples = vertexTextureCoordinateTuplesMap[imageName];

      add(vertexIndexes, facetVertexIndexes);
      add(vertexNormals, facetVertexNormals);
      add(vertexPositions, facetVertexPositions);
      add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
    });

    let textureOffset = 0;

    const combinedVertexIndexes = [],
          combinedVertexNormals = [],
          combinedVertexPositions = [],
          combinedVertexTextureCoordinateTuples = [];

    this.imageNames.forEach((imageName) => {
      const vertexIndexes = vertexIndexesMap[imageName],
            vertexNormals = vertexNormalsMap[imageName],
            vertexPositions = vertexPositionsMap[imageName],
            vertexTextureCoordinateTuples = vertexTextureCoordinateTuplesMap[imageName];

      add(combinedVertexIndexes, vertexIndexes);
      add(combinedVertexNormals, vertexNormals);
      add(combinedVertexPositions, vertexPositions);
      add(combinedVertexTextureCoordinateTuples, vertexTextureCoordinateTuples);

      const vertexIndexLength = vertexIndexes.length;

      textureOffset = vertexIndexLength;  ///

      this.textureOffsets.push(textureOffset);
    });

    const rendererData = this.getRendererData(),
          vertexIndexes = combinedVertexIndexes,
          vertexNormals = combinedVertexNormals,
          vertexPositions = combinedVertexPositions,
          vertexTextureCoordinateTuples = combinedVertexTextureCoordinateTuples;

    rendererData.addVertexIndexes(vertexIndexes);
    rendererData.addVertexNormals(vertexNormals);
    rendererData.addVertexPositions(vertexPositions);
    rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);

    super.createBuffers(canvas);
  }

  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const program = this.getProgram();

    canvas.useProgram(program);

    this.bindBuffers(canvas);

    const renderer = this;  ///

    canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix)

    let start,
        finish = 0;  ///

    this.textureOffsets.forEach((textureOffset, index) => {
      start = finish; ///

      finish += textureOffset;  ///

      this.useTexture(index, canvas);

      canvas.drawElements(start, finish);
    });
  }

  static fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
	  const repeat = imageTiling; ///

    images.map((image, index) => canvas.createTexture(image, index, repeat));

    const textureOffsets = [],
          imagesTextureRenderer = TextureRenderer.fromNothing(ImagesTextureRenderer, canvas, imageNames, textureOffsets);

    return imagesTextureRenderer;
  }
}

module.exports = ImagesTextureRenderer;
