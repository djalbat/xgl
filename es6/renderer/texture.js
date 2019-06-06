'use strict';

const Renderer = require('../renderer'),
      arrayUtilities = require('../utilities/array'),
      vertexShaderSource = require('./source/texture/vertexShader'),
      TextureRendererData = require('../renderer/data/texture'),
      fragmentShaderSource = require('./source/texture/fragmentShader'),
      TextureRendererBuffers = require('../renderer/buffers/texture'),
      TextureUniformLocations = require('./locations/texture/uniform'),
      TextureAttributeLocations = require('./locations/texture/attribute');

const { push } = arrayUtilities,
      { createProgram } = Renderer;

const add = push; ///

class TextureRenderer extends Renderer {
	constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, imageMapJSON, textureOffsets) {
		super(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

		this.imageNames = imageNames;

		this.imageMapJSON = imageMapJSON;

		this.textureOffsets = textureOffsets;
	}

	getImageNames() {
	  return this.imageNames;
  }

	getImageMapJSON() {
		return this.imageMapJSON;
	}

	getTextureOffsets() {
	  return this.textureOffsets;
  }

  getTextureCoordinateAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

    return textureCoordinateAttributeLocation;
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
            texturedFacetVertexTextureCoordinateTuples = texturedFacet.getVertexTextureCoordinateTuples(this.imageMapJSON),
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

    const combinedVertexIndexes = [],
          combinedVertexNormals = [],
          combinedVertexPositions = [],
          combinedVertexTextureCoordinateTuples = [];

    let textureOffset = 0;

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

    const rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();

    rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
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

  static fromImageNamesImageMapJSONAndTextureOffsets(imageNames, imageMapJSON, textureOffsets, canvas) {
    const facets = [],
          program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          textureRendererBuffers = TextureRendererBuffers.fromNothing(),
          textureUniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          textureAttributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          rendererData = textureRendererData,  ///
          rendererBuffers = textureRendererBuffers, ///
          uniformLocations = textureUniformLocations, ///
          attributeLocations = textureAttributeLocations, ///
          textureRenderer = new TextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, imageMapJSON, textureOffsets);

    canvas.enableAnisotropicFiltering();  ///

    return textureRenderer;
  }

  static fromImagesAndImageNames(images, imageNames, canvas) {
    images.map((image, index) => canvas.createTexture(image, index));

    const imageMapJSON = null,
          textureOffsets = [],
          textureRenderer = TextureRenderer.fromImageNamesImageMapJSONAndTextureOffsets(imageNames, imageMapJSON, textureOffsets, canvas);

    return textureRenderer;
  }

  static fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
    const image = imageMap; ///

    canvas.createTexture(image);

    const imageNames = null,
          textureOffsets = null,
          textureRenderer = TextureRenderer.fromImageNamesImageMapJSONAndTextureOffsets(imageNames, imageMapJSON, textureOffsets, canvas);

    return textureRenderer;
  }
}

module.exports = TextureRenderer;
