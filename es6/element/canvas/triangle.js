'use strict';

const Facet = require('../../facet'),
      CanvasElement = require('../../element/canvas'),
      vectorUtilities = require('../../utilities/vector'),
      transformUtilities = require('../../utilities/transform');

const MaskingFacet = require('../../maskingFacet');

const { normalise3 } = vectorUtilities,
      { composeTransform } = transformUtilities;

const facets = calculateFacets(),
      colour = [ 1, 0, 0, 1 ];

class Triangle extends CanvasElement {
  constructor(transform) {
    super(transform);

    this.facets = facets; ///
    this.colour = colour; ///
  }

  getFacets() {
    return this.facets;
  }

  getColour() {
    return this.colour;
  }

  getInitialVertexPositions() {
    const initialVertexPositions = this.facets.reduce(function(initialVertexPositions, facet) {
      const vertices = facet.getVertices();

      initialVertexPositions = vertices.reduce(function(initialVertexPositions, vertex) {
        const initialVertexPosition = vertex.slice(); ///

        initialVertexPositions.push(initialVertexPosition);

        return initialVertexPositions;
      }, initialVertexPositions);

      return initialVertexPositions;
    }, []);

    return initialVertexPositions;
  }

  calculateVertexIndexes(vertexPositions) {
    let vertexIndex = 0;

    const vertexIndexes = this.facets.reduce(function(vertexIndexes, facet) {
            vertexIndexes = [ ...vertexIndexes, vertexIndex + 0, vertexIndex + 1, vertexIndex + 2 ];

            vertexIndex += 3;

            return vertexIndexes;
          }, []);

    return vertexIndexes;
  }

  calculateVertexNormals(vertexPositions) {
    const vertexNormals = this.facets.reduce(function(vertexNormals, facet) {
      const normal = facet.getNormal(),
            vertexNormal = normalise3(normal);

      vertexNormals.push(vertexNormal);
      vertexNormals.push(vertexNormal);
      vertexNormals.push(vertexNormal);

      return vertexNormals;
    }, []);

    return vertexNormals;
  }

  calculateVertexColours(vertexPositions) {
    const vertexColours = this.facets.reduce(function(vertexColours, facet) {
      const vertexColour = this.colour;

      vertexColours.push(vertexColour);
      vertexColours.push(vertexColour);
      vertexColours.push(vertexColour);

      return vertexColours;
    }.bind(this), []);

    return vertexColours;
  }

  create(colourRenderer, textureRenderer, transforms) {
    const vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

    colourRenderer.addVertexPositions(vertexPositions);
    colourRenderer.addVertexIndexes(vertexIndexes);
    colourRenderer.addVertexNormals(vertexNormals);
    colourRenderer.addVertexColours(vertexColours);

    super.create(colourRenderer, textureRenderer, transforms);
  }

  static fromProperties(properties, ...remainingArguments) {
    const { width, height, depth, position, rotations } = properties,
          transform = composeTransform(width, height, depth, position, rotations),
          Class = Triangle,
          canvasElement = CanvasElement.fromProperties(Class, properties, transform, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = Triangle;

function calculateFacets() {
  const facetVertices = [
          [ 0, 0, 0 ],
          [ 5, 0, 0 ],
          [ 0, 5, 0 ],
        ],
        maskingFacetVertices = [
          [ 2, 1, 0 ],
          [ 2, 2, 0 ],
          [ 1, 2, 0 ],
        ],
        facet = Facet.fromVertices(facetVertices),
        maskingFacet = MaskingFacet.fromVertices(maskingFacetVertices),
        facets = maskingFacet.maskFacet(facet);

  return facets;
}
