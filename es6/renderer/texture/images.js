'use strict';

const arrayUtilities = require('../../utilities/array'),
      TextureRenderer = require('../../renderer/texture');

const { push } = arrayUtilities;

const add = push; ///

class ImagesTextureRenderer extends TextureRenderer {
	constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, offsets) {
		super(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

		this.imageNames = imageNames;

		this.offsets = offsets;
	}

  createBuffers(canvas) {
    const facets = this.getFacets(),
          facetsMap = {};

    this.imageNames.forEach((imageName) => {
      facetsMap[imageName] = [];
    });

    facets.forEach((facet) => {
      const texturedFacet = facet,  ///
            imageName = texturedFacet.getImageName(),
            facets = facetsMap[imageName];

      facets.push(facet);
    });

    const vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];

    let index = 0;

    this.imageNames.forEach((imageName) => {
      const facets = facetsMap[imageName];

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

  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const program = this.getProgram();

    canvas.useProgram(program);

    this.bindBuffers(canvas);

    const renderer = this;  ///

    canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

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
	  const repeat = imageTiling; ///

    images.map((image, index) => canvas.createTexture(image, index, repeat));

    const offsets = [],
          imagesTextureRenderer = TextureRenderer.fromNothing(ImagesTextureRenderer, canvas, imageNames, offsets);

    return imagesTextureRenderer;
  }
}

module.exports = ImagesTextureRenderer;
