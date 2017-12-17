'use strict';

const Edge = require('../edge'),
      Facet = require('../facet'),
      Normal = require('../normal'),
      Vertex = require('../vertex'),
      facetUtilities = require('../utilities/facet');

const { cloneEdges, cloneNormal, cloneVertices, calculateEdges, calculateNormal } = facetUtilities;

class ColouredFacet extends Facet {
  constructor(vertices, normal, edges, colour) {
    super(vertices, normal, edges);
    
    this.colour = colour;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal(),
        edges = this.getEdges();

    vertices = cloneVertices(vertices);
    normal = cloneNormal(normal);
    edges = cloneEdges(edges);

    const colour = this.colour,
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

    return colouredFacet;
  }

  getColour() {
    return this.colour;
  }
  
  getVertexColours() {
    const vertexColour = this.colour, ///
          vertexColours = [
            vertexColour,
            vertexColour,
            vertexColour,
          ];
    
    return vertexColours;
  }

  fromVertices(vertices) {
    const colour = this.colour,
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

    return colouredFacet;
  }

  static fromVertexCoordinatesIndexesAndColour(vertexCoordinates, indexes, colour) {
    const vertices = verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);
    
    return colouredFacet;
  }
}

module.exports = ColouredFacet;

function verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes) {
  const vertices = indexes.map(function(index) {
    const coordinates = vertexCoordinates[index], ///
          vertex = Vertex.fromCoordinates(coordinates);

    return vertex;
  });

  return vertices;
}
