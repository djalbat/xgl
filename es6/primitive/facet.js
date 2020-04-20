"use strict";

const Edge = require("./edge"),
      Normal = require("./normal"),
      Vertex = require("./vertex"),
      constants = require("../constants"),
      facetUtilities = require("../utilities/facet"),
      arrayUtilities = require("../utilities/array"),
      midPointUtilities = require("../utilities/midPoint"),
      intersectionUtilities = require("../utilities/intersection");

const { VERTICES_LENGTH } = constants,
      { push, permute } = arrayUtilities,
      { calculateEdges, calculateNormal } = facetUtilities,
      { calculateMidPointPosition, isMidPointPositionToOneSideOfMaskingEdges } = midPointUtilities,
      { calculateIntermediateVertexPosition, calculateNonNullIntersections, calculateNullIntersectionIndex, calculateNonNullIntersectionIndex } = intersectionUtilities;

class Facet {
  constructor(vertices, normal, edges) {
    this.vertices = vertices;
    this.normal = normal;
    this.edges = edges;
  }

  getVertices() {
    return this.vertices;
  }

  getNormal() {
    return this.normal;
  }

  getEdges() {
    return this.edges;
  }
  
  getVertexPositions() {
    const vertexPositions = this.vertices.map((vertex) => vertex.getPosition());
    
    return vertexPositions;
  }
  
  getVertexNormals() {
    const normalExtent = this.normal.getExtent(),
          vertexNormal = normalExtent,  ///
          vertexNormals = [
            vertexNormal,
            vertexNormal,
            vertexNormal,
          ];
    
    return vertexNormals;
  }
  
  getVertexIndexes(index) {
    const vertexIndex = index * 3,
          vertexIndexes = [
            vertexIndex + 0,
            vertexIndex + 1,
            vertexIndex + 2,
          ];
    
    return vertexIndexes;
  }

  isMasked(maskingFacet) {
    const maskingEdges = maskingFacet.getMaskingEdges(),
          midPointPosition = calculateMidPointPosition(this.vertices),
          midPointPositionToOneSideOfMaskingEdges = isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges),
          masked = midPointPositionToOneSideOfMaskingEdges;  ///
    
    return masked;
  }

  permute(places) {
    this.vertices = permute(this.vertices, places);

    this.normal = calculateNormal(this.vertices, Normal);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  rotate(rotationQuaternion) {
    this.vertices.forEach((vertex) => vertex.rotate(rotationQuaternion));

    this.normal = calculateNormal(this.vertices, Normal);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  applyTransform(transform) {
    this.vertices.forEach((vertex) => vertex.applyTransform(transform));

    this.normal = calculateNormal(this.vertices, Normal);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  splitWithIntersections(intersections, smallerFacets) {
    const nonNullIntersections = calculateNonNullIntersections(intersections),
          nonNullIntersectionsLength = nonNullIntersections.length;

    switch (nonNullIntersectionsLength) {
      case 2 :
        this.splitWithTwoNonNullIntersections(intersections, smallerFacets);
        break;

      case 1 :
        this.splitWithOneNonNullIntersection(intersections, smallerFacets);
        break;

      case 0 :
        this.splitWithNoNonNullIntersections(intersections, smallerFacets);
        break;
    }
  }
  
  splitWithTwoNonNullIntersections(intersections, smallerFacets) {
    const nullIntersectionIndex = calculateNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nullIntersectionIndex) % VERTICES_LENGTH;

    intersections = permute(intersections, places);

    intersections = intersections.slice(1); ///

    this.permute(places);

    const startVertexPositionIndexes = [ 1, 2 ],
          endVertexPositionIndexes = [ 2, 0 ],
          indexTuples = [

            [ 0, 1, 3 ],
            [ 3, 4, 0 ],
            [ 3, 2, 4 ],

          ];

    this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
  }

  splitWithOneNonNullIntersection(intersections, smallerFacets) {
    const nonNullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nonNullIntersectionIndex) % VERTICES_LENGTH;

    intersections = permute(intersections, places);

    intersections = intersections.slice(0, 1);  ///

    this.permute(places);

    const startVertexPositionIndexes = [ 0 ],
          endVertexPositionIndexes = [ 1 ],
          indexTuples = [

            [ 0, 3, 2 ],
            [ 3, 1, 2 ],

          ];

    this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
  }

  splitWithNoNonNullIntersections(intersections, smallerFacets) {
    const smallerFacet = this.fromVertices(this.vertices);  ///

    smallerFacets.push(smallerFacet);
  }

  splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets) {
    const vertexPositions = this.getVertexPositions(),
          intermediateVertexPositions = intersections.map((intersection, index) => {
            const startVertexPositionIndex = startVertexPositionIndexes[index],
                  endVertexPositionIndex = endVertexPositionIndexes[index],
                  startVertexPosition = vertexPositions[startVertexPositionIndex],
                  endVertexPosition = vertexPositions[endVertexPositionIndex],
                  intermediateVertexPosition = calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection);

            return intermediateVertexPosition;
          });

    push(vertexPositions, intermediateVertexPositions);

    indexTuples.forEach((indexTuple) => {
      const positions = vertexPositions,  ///
            indexes = indexTuple,  ///
            facet = this, 
            smallerFacet = smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet);

      if (smallerFacet !== null) {
        smallerFacets.push(smallerFacet);
      }
    });
  }
}

module.exports = Facet;

function smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet) {
  const vertices = indexes.map((index) => {
          let position = positions[index];
    
          position = position.slice(); ///
    
          const vertex = Vertex.fromPosition(position);

          return vertex;
        }),
        smallerFacet = facet.fromVertices(vertices);

  return smallerFacet;
}
