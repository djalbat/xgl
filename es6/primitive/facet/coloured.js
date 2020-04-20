"use strict";

const Edge = require("../edge"),
      Facet = require("../facet"),
      Normal = require("../normal"),
      Vertex = require("../vertex"),
      facetUtilities = require("../../utilities/facet"),
      verticesUtilities = require("../../utilities/vertices"),
      approximateUtilities = require("../../utilities/approximate");

const { isApproximatelyEqualToZero } = approximateUtilities,
      { verticesFromCoordinateTuplesAndIndexTuple } = verticesUtilities,
      { cloneEdges, cloneNormal, cloneVertices, calculateArea, calculateEdges, calculateNormal } = facetUtilities;

class ColouredFacet extends Facet {
  constructor(vertices, normal, edges, rgba) {
    super(vertices, normal, edges);
    
    this.rgba = rgba;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal(),
        edges = this.getEdges();

    vertices = cloneVertices(vertices);
    normal = cloneNormal(normal);
    edges = cloneEdges(edges);

    const rgba = this.rgba,
          colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);

    return colouredFacet;
  }

  getVertexColours() {
    const vertexColour = this.rgba, ///
          vertexColours = [
            vertexColour,
            vertexColour,
            vertexColour,
          ];
    
    return vertexColours;
  }

  fromVertices(vertices) {
    let colouredFacet = null;

    const area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero;  ///

    if (largeEnough) {
      const rgba = this.rgba,
            normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);

      colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
    }

    return colouredFacet;
  }

  static fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
    let colouredFacet = null;

    const vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero;  ///

    if (largeEnough) {
      const normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge),
            rgba = [ ...colour, 1 ];  ///

      colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
    }

    return colouredFacet;
  }
}

module.exports = ColouredFacet;
