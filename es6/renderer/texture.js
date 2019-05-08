'use strict';

const Renderer = require('../renderer'),
      vertexShaderSource = require('./source/texture/vertexShader'),
      TextureRendererData = require('../renderer/data/texture'),
      fragmentShaderSource = require('./source/texture/fragmentShader'),
      TextureRendererBuffers = require('../renderer/buffers/texture'),
      TextureUniformLocations = require('./locations/texture/uniform'),
      TextureAttributeLocations = require('./locations/texture/attribute');

const { createProgram } = Renderer;

class TextureRenderer extends Renderer {
	constructor(program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageJSON) {
		super(program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

		this.imageJSON = imageJSON;
	}

	getImageJSON() {
		return this.imageJSON;
	}

  getTextureCoordinateAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

    return textureCoordinateAttributeLocation;
  }

  addVertexTextureCoordinates(vertexTextureCoordinates) { this.rendererData.addVertexTextureCoordinates(vertexTextureCoordinates); }

  createBuffers(canvas) {
    const rendererData = this.getRendererData(),
          rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          textureCoordinatesData = rendererData.getVertexTextureCoordinatesData();

    rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas);
  }

  bindBuffers(canvas) {
    const rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

    rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
  }

  activateTexture(canvas) {
    const context = canvas.getContext(),
          { TEXTURE0 } = context,
          target = TEXTURE0,  ///
          uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          uSamplerUniformLocationIntegerValue = 0;

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(samplerUniformLocation, uSamplerUniformLocationIntegerValue);
  }

  static fromImageMapAndImageJSON(imageMap = null, imageJSON = null, canvas) {
    const program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          textureRendererBuffers = TextureRendererBuffers.fromNothing(),
          rendererData = textureRendererData,  ///
          rendererBuffers = textureRendererBuffers, ///
          uniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          attributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          textureRenderer = new TextureRenderer(program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageJSON);

    if (imageMap !== null) {
      const image = imageMap;	///

      canvas.createTexture(image);
    }

    return textureRenderer;
  }
}

module.exports = TextureRenderer;
