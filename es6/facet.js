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
      { cloneVertices } = verticesUtilities,
      { first, second, third, permute } = arrayUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { calculateEdges, calculateNormal, calculateArea } = facetUtilities,
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

  rotateAboutZAxis(rotationAboutZAxisMatrix) {
    this.vertices.forEach(function(vertex) {
      vertex.rotateAboutZAxis(rotationAboutZAxisMatrix);
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
          fourthVertex = firstIntermediateVertex, ///
          fifthVertex = secondIntermediateVertex, ///
          smallerFacetsIndices = [

            [ 0, 1, 3 ],
            [ 3, 4, 0 ],
            [ 3, 2, 4 ],

          ],
          vertices = [
            firstVertex,
            secondVertex,
            thirdVertex,
            fourthVertex,
            fifthVertex
          ],
          facet = this; ///

    smallerFacetsIndices.forEach(function(smallerFacetIndices) {
      const indices = smallerFacetIndices,  ///
            smallerFacet = smallerFacetFromVerticesAndIndices(vertices, indices, facet),
            smallerFacetTooSmall = smallerFacet.isTooSmall();

      if (!smallerFacetTooSmall) {
        smallerFacets.push(smallerFacet);
      }
    });
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
          fourthVertex = intermediateVertex,  ///
          vertices = [
            firstVertex,
            secondVertex,
            thirdVertex,
            fourthVertex
          ],
          smallerFacetsIndices = [

            [ 0, 3, 2 ],
            [ 3, 1, 2 ],

          ],
          facet = this;

    smallerFacetsIndices.forEach(function(smallerFacetIndices) {
      const indices = smallerFacetIndices,  ///
            smallerFacet = smallerFacetFromVerticesAndIndices(vertices, indices, facet),
            smallerFacetTooSmall = smallerFacet.isTooSmall();

      if (!smallerFacetTooSmall) {
        smallerFacets.push(smallerFacet);
      }
    });
  }

  splitWithZeroNonNullIntersections(intersections, smallerFacets) {
    const smallerFacet = this.fromVertices(this.vertices);  ///

    smallerFacets.push(smallerFacet);
  }
}

module.exports = Facet;

function smallerFacetFromVerticesAndIndices(vertices, indices, facet) {
  vertices = indices.map(function(index) {
    let vertex = vertices[index];

    vertex = vertex.clone();  ///

    return vertex;
  });

  const smallerFacet = facet.fromVertices(vertices);

  return smallerFacet;
}
