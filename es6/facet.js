'use strict';

const Edge = require('./edge'),
      Vertex = require('./vertex'),
      constants = require('./constants'),
      vectorMaths = require('./maths/vector'),
      facetUtilities = require('./utilities/facet'),
      arrayUtilities = require('./utilities/array'),
      rotationUtilities = require('./utilities/rotation'),
      approximateUtilities = require('./utilities/approximate');

const { VERTICES_LENGTH } = constants,
      { add3, subtract3, scale3, normalise3 } = vectorMaths,
      { first, second, third, permute } = arrayUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { rotateVertices, rotateVerticesAboutZAxis } = rotationUtilities,
      { calculateEdges, calculateNormal, calculateArea } = facetUtilities;

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
    const vertexNormal = normalise3(this.normal),
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

  getMidPointPosition() {
    const midPointPosition = this.vertices.reduce(function(midPointPosition, vertex) {
      const position = vertex.getPosition(),
            scaledVertexPosition = scale3(position, 1/3);

      midPointPosition = add3(midPointPosition, scaledVertexPosition);

      return midPointPosition;
    }, [ 0, 0, 0 ]);

    return midPointPosition;
  }

  isTooSmall() {
    const area = calculateArea(this.vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          tooSmall = areaApproximatelyEqualToZero;  ///
    
    return tooSmall;
  }
  
  isMasked(maskingFacet) {
    const maskingEdges = maskingFacet.getMaskingEdges(),
          midPointPosition = this.getMidPointPosition(),
          midPointPositionToOneSideOfMaskingEdges = isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges),
          masked = midPointPositionToOneSideOfMaskingEdges;  ///
    
    return masked;
  }

  permute(places) {
    this.vertices = permute(this.vertices, places);
  }

  rotate(rotationQuaternion) {
    this.vertices = rotateVertices(this.vertices, rotationQuaternion);
    
    this.normal = calculateNormal(this.vertices);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  rotateAboutZAxis(rotationAboutZAxisMatrix) {
    this.vertices = rotateVerticesAboutZAxis(this.vertices, rotationAboutZAxisMatrix);
    
    this.normal = calculateNormal(this.vertices);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  applyTransforms(transforms) {
    this.vertices = this.vertices.map(function(vertex) {
      transforms.forEach(function(transform) {
        vertex.applyTransform(transform);
      });

      return vertex;
    });

    this.normal = calculateNormal(this.vertices);

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
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstIntersection),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondIntersection),
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
          intermediateVertex = calculateIntermediateVertex(firstVertex, secondVertex, firstIntersection),
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

function calculateIntermediateVertex(startVertex, endVertex, intersection) {
  const startPosition = startVertex.getPosition(),
        endPosition = endVertex.getPosition(),
        extent = subtract3(endPosition, startPosition),
        offset = scale3(extent, intersection),
        position = add3(startPosition, offset),
        vertex = new Vertex(position),
        intermediateVertex = vertex;  ///

  return intermediateVertex;
}

function calculateNonNullIntersections(intersections) {
  const nonNullIntersections = intersections.reduce(function(nonNullIntersections, intersection) {
    if (intersection !== null) {
      const nonNullIntersection = intersection; ///

      nonNullIntersections.push(nonNullIntersection);
    }

    return nonNullIntersections;
  }, []);

  return nonNullIntersections;
}

function calculateNullIntersectionIndex(intersections) {
  const nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex, intersection, index) {
    if (nullIntersectionIndex === null) {
      if (intersection === null) {
        nullIntersectionIndex = index;
      }
    }

    return nullIntersectionIndex;
  }, null);

  return nullIntersectionIndex;
}

function calculateNonNullIntersectionIndex(intersections) {
  const nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex, intersection, index) {
    if (nullIntersectionIndex === null) {
      if (intersection !== null) {
        nullIntersectionIndex = index;
      }
    }

    return nullIntersectionIndex;
  }, null);

  return nullIntersectionIndex;
}

function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
  const midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges),
        midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges),
        midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges; ///

  return midPointPositionToOneSideOfMaskingEdges;
}

function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
  const midPointPositionToTheLeftOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheLeftOfMaskingEdges, maskingEdge) {
    if (midPointPositionToTheLeftOfMaskingEdges) {
      const midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);

      midPointPositionToTheLeftOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdge;
    }

    return midPointPositionToTheLeftOfMaskingEdges;
  }, true);

  return midPointPositionToTheLeftOfMaskingEdges;
}

function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
  const midPointPositionToTheRightOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheRightOfMaskingEdges, maskingEdge) {
    if (midPointPositionToTheRightOfMaskingEdges) {
      const midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);

      midPointPositionToTheRightOfMaskingEdges = midPointPositionToTheRightOfMaskingEdge;
    }

    return midPointPositionToTheRightOfMaskingEdges;
  }, true);

  return midPointPositionToTheRightOfMaskingEdges;
}
