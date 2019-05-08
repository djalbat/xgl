'use strict';

const Edge = require('./edge'),
      Normal = require('./normal'),
      Vertex = require('./vertex'),
      constants = require('./constants'),
      facetUtilities = require('./utilities/facet'),
      arrayUtilities = require('./utilities/array'),
      midPointUtilities = require('./utilities/midPoint'),
      approximateUtilities = require('./utilities/approximate'),
      intersectionUtilities = require('./utilities/intersection');

const { VERTICES_LENGTH } = constants,
      { push, permute } = arrayUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { calculateEdges, calculateNormal, calculateArea } = facetUtilities,
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
    const vertexPositions = this.vertices.map(function(vertex) {
      const vertexPosition = vertex.getPosition();
      
      return vertexPosition;
    });
    
    return vertexPositions;
  }
  
  getVertexNormals() {
    const extent = this.normal.getExtent(),
          vertexNormal = extent,  ///
          vertexNormals = [
            vertexNormal,
            vertexNormal,
            vertexNormal,
          ];
    
    return vertexNormals;
  }
  
  getVertexIndexes(index) { ///
    const vertexIndex = index * 3,
          vertexIndexes = [
            vertexIndex + 0,
            vertexIndex + 1,
            vertexIndex + 2,
          ];
    
    return vertexIndexes;
  }

  isTooSmall() {
    const area = calculateArea(this.vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          tooSmall = areaApproximatelyEqualToZero;  ///

    return tooSmall;
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
    this.vertices.forEach(function(vertex) {
      vertex.rotate(rotationQuaternion);
    });

    this.normal = calculateNormal(this.vertices, Normal);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  applyTransforms(transforms) {
    this.vertices.forEach(function(vertex) {
      vertex.applyTransforms(transforms);
    });

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

    const startVertexPositionIndices = [ 1, 2 ],
          endVertexPositionIndices = [ 2, 0 ],
          smallerFacetsIndices = [

            [ 0, 1, 3 ],
            [ 3, 4, 0 ],
            [ 3, 2, 4 ],

          ];

    this.splitWithIndicesAndIntersections(startVertexPositionIndices, endVertexPositionIndices, smallerFacetsIndices, intersections, smallerFacets);
  }

  splitWithOneNonNullIntersection(intersections, smallerFacets) {
    const nonNullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nonNullIntersectionIndex) % VERTICES_LENGTH;

    intersections = permute(intersections, places);

    intersections = intersections.slice(0, 1);  ///

    this.permute(places);

    const startVertexPositionIndices = [ 0 ],
          endVertexPositionIndices = [ 1 ],
          smallerFacetsIndices = [

            [ 0, 3, 2 ],
            [ 3, 1, 2 ],

          ];

    this.splitWithIndicesAndIntersections(startVertexPositionIndices, endVertexPositionIndices, smallerFacetsIndices, intersections, smallerFacets);
  }

  splitWithNoNonNullIntersections(intersections, smallerFacets) {
    const smallerFacet = this.fromVertices(this.vertices);  ///

    smallerFacets.push(smallerFacet);
  }

  splitWithIndicesAndIntersections(startVertexPositionIndices, endVertexPositionIndices, smallerFacetsIndices, intersections, smallerFacets) {
    const vertexPositions = this.getVertexPositions(),
          intermediateVertexPositions = intersections.map(function(intersection, index) {
            const startVertexPositionIndex = startVertexPositionIndices[index],
                  endVertexPositionIndex = endVertexPositionIndices[index],
                  startVertexPosition = vertexPositions[startVertexPositionIndex],
                  endVertexPosition = vertexPositions[endVertexPositionIndex],
                  intermediateVertexPosition = calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection);

            return intermediateVertexPosition;
          });

    push(vertexPositions, intermediateVertexPositions);

    smallerFacetsIndices.forEach((smallerFacetIndices) => {
      const positions = vertexPositions,  ///
            indices = smallerFacetIndices,  ///
            facet = this, 
            smallerFacet = smallerFacetFromVerticesAndVertexPositions(positions, indices, facet),
            smallerFacetTooSmall = smallerFacet.isTooSmall();

      if (!smallerFacetTooSmall) {
        smallerFacets.push(smallerFacet);
      }
    });
  }
}

module.exports = Facet;

function smallerFacetFromVerticesAndVertexPositions(vertexPositions, indices, facet) {
  const vertices = indices.map(function(index) {
          const vertexPosition = vertexPositions[index];
    
          let position = vertexPosition;  ///
    
          position = clonePosition(position);
    
          const vertex = Vertex.fromPosition(position);

          return vertex;
        }),
        smallerFacet = facet.fromVertices(vertices);

  return smallerFacet;
}

function clonePosition(position) { return position.slice(); } ///
