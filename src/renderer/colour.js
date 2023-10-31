"use strict";

import Renderer from "../renderer";
import ColourRendererData from "../renderer/data/colour";
import vertexShaderSource from "./source/colour/vertexShader";
import fragmentShaderSource from "./source/colour/fragmentShader";
import ColourRendererBuffers from "../renderer/buffers/colour";
import ColourUniformLocations from "./locations/colour/uniform";
import ColourAttributeLocations from "./locations/colour/attribute";

import { push } from "../utilities/array";
import { createProgram } from "../renderer";

export default class ColourRenderer extends Renderer {
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

      push(vertexIndexes, facetVertexIndexes);
      push(vertexNormals, facetVertexNormals);
      push(vertexPositions, facetVertexPositions);
      push(vertexColours, colouredFacetVertexColours);
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

  render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
    const program = this.getProgram();

    canvas.useProgram(program);

    this.bindBuffers(canvas);

    const renderer = this;  ///

    canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);

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
