'use strict';

const arrayUtilities = require('../../utilities/array'),
      TextureRenderer = require('../../renderer/texture');

const { push, first } = arrayUtilities;

const add = push; ///

class ImagesTextureRenderer extends TextureRenderer {
	constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
		super(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

		this.imageNames = imageNames;

		this.facetsMap = facetsMap;

		this.offsets = offsets;
	}

	addFacets(facets) {
	  const texturedFacets = facets,  ///
          texturedFacetsLength = texturedFacets.length;

	  if (texturedFacetsLength > 0) {
	    const firstTexturedFacet = first(texturedFacets),
            texturedFacet = firstTexturedFacet, ///
            imageName = texturedFacet.getImageName(),
            facets = this.facetsMap[imageName];

	    add(facets, texturedFacets)
    }
  }

  createBuffers(canvas) {
    const vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];

    let index = 0;

    this.imageNames.forEach((imageName) => {
      const facets = this.facetsMap[imageName];

      facets.forEach((facet) => {
        const texturedFacet = facet,  ///
              facetVertexIndexes = facet.getVertexIndexes(index),
              facetVertexNormals = facet.getVertexNormals(),
              facetVertexPositions = facet.getVertexPositions(),
              texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(),
              texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples;  ///

        add(vertexIndexes, facetVertexIndexes);
        add(vertexNormals, facetVertexNormals);
        add(vertexPositions, facetVertexPositions);
        add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);

        index++;
      });

      const offset = index * 3;  ///

      this.offsets.push(offset);
    });

    const rendererData = this.getRendererData();

    rendererData.addVertexIndexes(vertexIndexes);
    rendererData.addVertexNormals(vertexNormals);
    rendererData.addVertexPositions(vertexPositions);
    rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);

    super.createBuffers(canvas);
  }

  render(canvas, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    const program = this.getProgram();

    canvas.useProgram(program);

    this.bindBuffers(canvas);

    const renderer = this;  ///

    canvas.render(renderer, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);

    let start,
        finish = 0;  ///

    this.offsets.forEach((offset, index) => {
      start = finish; ///

      finish = offset;  ///

      this.useTexture(index, canvas);

      canvas.drawElements(start, finish);
    });
  }

  static fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
    const offsets = [],
          facetsMap = {};

    images.forEach((image, index) => {
      const facets = [],
            repeat = imageTiling, ///
            imageName = imageNames[index];

      facetsMap[imageName] = facets;

      canvas.createTexture(image, index, repeat);
    });

    const imagesTextureRenderer = TextureRenderer.fromNothing(ImagesTextureRenderer, canvas, imageNames, facetsMap, offsets);

    return imagesTextureRenderer;
  }
}

module.exports = ImagesTextureRenderer;
