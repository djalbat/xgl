'use strict';

const Edge = require('./edge'),
      Normal = require('./normal'),
      Vertex = require('./vertex'),
      constants = require('./constants'),
      facetUtilities = require('./utilities/facet'),
      arrayUtilities = require('./utilities/array'),
      verticesUtilities = require('./utilities/vertices'),
      midPointUtilities = require('./utilities/midPoint'),
      approximateUtilities = require('./utilities/approximate'),
      intersectionUtilities = require('./utilities/intersection');

const { VERTICES_LENGTH } = constants,
      { first, second, third, permute } = arrayUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { calculateEdges, calculateNormal, calculateArea } = facetUtilities,
      { rotateVertices, transformVertices, rotateVerticesAboutZAxis } = verticesUtilities,
      { calculateMidPointPosition, isMidPointPositionToOneSideOfMaskingEdges } = midPointUtilities,
      { calculateIntermediateVertex, calculateNonNullIntersections, calculateNullIntersectionIndex, calculateNonNullIntersectionIndex } = intersectionUtilities;

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

  isMasked(maskingFacet) {
    const maskingEdges = maskingFacet.getMaskingEdges(),
          midPointPosition = calculateMidPointPosition(this.vertices),
          midPointPositionToOneSideOfMaskingEdges = isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges),
          masked = midPointPositionToOneSideOfMaskingEdges;  ///
    
    return masked;
  }

  isTooSmall() {
    const area = calculateArea(this.vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          tooSmall = areaApproximatelyEqualToZero;  ///

    return tooSmall;
  }

  permute(places) {
    this.vertices = permute(this.vertices, places);
  }

  rotate(rotationQuaternion) {
    this.vertices = rotateVertices(this.vertices, rotationQuaternion);
    
    this.normal = calculateNormal(this.vertices, Normal);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  rotateAboutZAxis(rotationAboutZAxisMatrix) {
    this.vertices = rotateVerticesAboutZAxis(this.vertices, rotationAboutZAxisMatrix);
    
    this.normal = calculateNormal(this.vertices, Normal);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  applyTransforms(transforms) {
    this.vertices = transformVertices(this.vertices, transforms);

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
        this.splitWithZeroNonNullIntersections(intersections, smallerFacets);
        break;
    }
  }
  
  splitWithTwoNonNullIntersections(intersections, smallerFacets) {
    const nullIntersectionIndex = calculateNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nullIntersectionIndex) % VERTICES_LENGTH;

    intersections = permute(intersections, places);

    intersections = intersections.slice(1); ///
    
    this.permute(places);

    const firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          firstIntersection = first(intersections),
          secondIntersection = second(intersections),
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstIntersection, Vertex),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondIntersection, Vertex),
          firstVertices = [
            firstVertex,
            secondVertex,
            firstIntermediateVertex
          ],
          secondVertices = [
            firstIntermediateVertex,
            secondIntermediateVertex,
            firstVertex
          ],
          thirdVertices = [
            firstIntermediateVertex,
            thirdVertex,
            secondIntermediateVertex
          ],
          firstFacet = this.fromVertices(firstVertices),
          secondFacet = this.fromVertices(secondVertices),
          thirdFacet = this.fromVertices(thirdVertices),
          firstFacetTooSmall = firstFacet.isTooSmall(),
          secondFacetTooSmall = secondFacet.isTooSmall(),
          thirdFacetTooSmall = thirdFacet.isTooSmall();

    if (!firstFacetTooSmall) {
      smallerFacets.push(firstFacet);
    }

    if (!secondFacetTooSmall) {
      smallerFacets.push(secondFacet);
    }

    if (!thirdFacetTooSmall) {
      smallerFacets.push(thirdFacet);
    }
  }

  splitWithOneNonNullIntersection(intersections, smallerFacets) {
    const nonNullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nonNullIntersectionIndex) % VERTICES_LENGTH;

    intersections = permute(intersections, places);

    this.permute(places);

    const firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          firstIntersection = first(intersections),
          intermediateVertex = calculateIntermediateVertex(firstVertex, secondVertex, firstIntersection, Vertex),
          firstVertices = [
            firstVertex,
            intermediateVertex,
            thirdVertex
          ],
          secondVertices = [
            intermediateVertex,
            secondVertex,
            thirdVertex
          ],
          firstFacet = this.fromVertices(firstVertices),
          secondFacet = this.fromVertices(secondVertices),
          firstFacetTooSmall = firstFacet.isTooSmall(),
          secondFacetTooSmall = secondFacet.isTooSmall();

    if (!firstFacetTooSmall) {
      smallerFacets.push(firstFacet);
    }

    if (!secondFacetTooSmall) {
      smallerFacets.push(secondFacet);
    }
  }

  splitWithZeroNonNullIntersections(intersections, smallerFacets) {
    const smallerFacet = this;  ///

    smallerFacets.push(smallerFacet);
  }
}

module.exports = Facet;
