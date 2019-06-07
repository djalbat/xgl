'use strict';

const Renderer = require('../renderer'),
      arrayUtilities = require('../utilities/array'),
      ColourRendererData = require('../renderer/data/colour'),
      vertexShaderSource = require('./source/colour/vertexShader'),
      fragmentShaderSource = require('./source/colour/fragmentShader'),
      ColourRendererBuffers = require('../renderer/buffers/colour'),
      ColourUniformLocations = require('./locations/colour/uniform'),
      ColourAttributeLocations = require('./locations/colour/attribute');

const { push } = arrayUtilities,
      { createProgram } = Renderer;

const add = push; ///

class ColourRenderer extends Renderer {
  getVertexColourAttributeLocation() {
    const attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

    return vertexColourAttributeLocation;
  }

  createBuffers(canvas) {
    const facets = this.getFacets(),
          vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexColours = [];

    facets.forEach((facet, index) => {
      const colouredFacet = facet,  ///
            facetVertexIndexes = facet.getVertexIndexes(index),
            facetVertexNormals = facet.getVertexNormals(),
            facetVertexPositions = facet.getVertexPositions(),
            colouredFacetVertexColours = colouredFacet.getVertexColours();

      add(vertexIndexes, facetVertexIndexes);
      add(vertexNormals, facetVertexNormals);
      add(vertexPositions, facetVertexPositions);
      add(vertexColours, colouredFacetVertexColours);
    });

    const rendererData = this.getRendererData();

    rendererData.addVertexIndexes(vertexIndexes);
    rendererData.addVertexNormals(vertexNormals);
    rendererData.addVertexColours(vertexColours);
    rendererData.addVertexPositions(vertexPositions);

    const rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          vertexColoursData = rendererData.getVertexColoursData();

    rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
  }

  bindBuffers(canvas) {
    const rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
    
    rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
  }

  render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const program = this.getProgram();

    canvas.useProgram(program);

    this.bindBuffers(canvas);

    const renderer = this;  ///

    canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

    const count = this.getCount(),
          start = 0,
          finish = count; ///

    canvas.drawElements(start, finish);
  }

  static fromNothing(canvas) {
    const facets = [],
          program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          colourRendererData = ColourRendererData.fromNothing(),
          colourRendererBuffers = ColourRendererBuffers.fromNothing(),
          colourUniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          colourAttributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          rendererData = colourRendererData,  ///
          rendererBuffers = colourRendererBuffers,  ///
          uniformLocations = colourUniformLocations,  ///
          attributeLocations = colourAttributeLocations,  ///
          colourRenderer = new ColourRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
    
    return colourRenderer;
  }
}

module.exports = ColourRenderer;
