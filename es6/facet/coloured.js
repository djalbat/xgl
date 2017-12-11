'use strict';

const Edge = require('../edge'),
      Facet = require('../facet'),
      Vertex = require('../vertex'),
      facetUtilities = require('../utilities/facet');

const { cloneEdges, cloneNormal, cloneVertices, calculateEdges, calculateNormal } = facetUtilities;

class ColouredFacet extends Facet {
  constructor(vertices, normal, edges, colour) {
    super(vertices, normal, edges);
    
    this.colour = colour;
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

  splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) { super.splitWithTwoNonNullIntersections(intersections, smallerFacets, this); } ///

  splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) { super.splitWithOneNonNullIntersection(intersections, smallerFacets, this); } ///

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal(),
        edges = this.getEdges();
    
    vertices = cloneVertices(vertices);
    normal = cloneNormal(normal);
    edges = cloneEdges(edges);

    const colour = this.colour.slice(),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

    return colouredFacet;
  }

  fromVertices(vertices) {
    const colour = this.colour,
          normal = calculateNormal(vertices),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

    return colouredFacet;
  }

  static fromVertexCoordinatesIndexesAndColour(vertexCoordinates, indexes, colour) {
    const vertices  = indexes.map(function(index) {
            const coordinates = vertexCoordinates[index],
                  vertex = Vertex.fromCoordinates(coordinates);

            return vertex;
          }),
          normal = calculateNormal(vertices),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);
    
    return colouredFacet;
  }
}

module.exports = ColouredFacet;
