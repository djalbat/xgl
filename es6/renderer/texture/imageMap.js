'use strict';

const arrayUtilities = require('../../utilities/array'),
      TextureRenderer = require('../../renderer/texture');

const { push } = arrayUtilities;

const add = push; ///

class ImageMapTextureRenderer extends TextureRenderer {
	constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
		super(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

		this.imageMapJSON = imageMapJSON;
	}

  createBuffers(canvas) {
    const facets = this.getFacets(),
          vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];

    facets.forEach((facet, index) => {
      const texturedFacet = facet,  ///
            facetVertexIndexes = facet.getVertexIndexes(index),
            facetVertexNormals = facet.getVertexNormals(),
            facetVertexPositions = facet.getVertexPositions(),
            texturedFacetImageName = texturedFacet.getImageName(),
            json = this.imageMapJSON[texturedFacetImageName],
            extent = json,  ///
            mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(extent),
            texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples; ///

      add(vertexIndexes, facetVertexIndexes);
      add(vertexNormals, facetVertexNormals);
      add(vertexPositions, facetVertexPositions);
      add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
    });

    const rendererData = this.getRendererData();

    rendererData.addVertexIndexes(vertexIndexes);
    rendererData.addVertexNormals(vertexNormals);
    rendererData.addVertexPositions(vertexPositions);
    rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);

    super.createBuffers(canvas);
  }

  bindBuffers(canvas) {
    const rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

    rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
  }

  useTexture(index, canvas) {
    const uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          samplerUniformLocationIntegerValue = index; ///

    canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
  }

  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const program = this.getProgram();

    canvas.useProgram(program);

    this.bindBuffers(canvas);

    const renderer = this;  ///

    canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

    const rendererData = this.getRendererData(),
          count = rendererData.getCount(),
          index = 0,
          start = 0,
          finish = count; ///

    this.useTexture(index, canvas);

    canvas.drawElements(start, finish);
  }

  static fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
    const image = imageMap, ///
          index = 0;

    canvas.createTexture(image, index);

    const imageMapTextureRenderer = TextureRenderer.fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);

    return imageMapTextureRenderer;
  }
}

module.exports = ImageMapTextureRenderer;
