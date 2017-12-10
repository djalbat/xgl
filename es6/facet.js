'use strict';

const Edge = require('./edge'),
      constants = require('./constants'),
      facetUtilities = require('./utilities/facet'),
      arrayUtilities = require('./utilities/array'),
      vectorUtilities = require('./utilities/vector'),
      rotationUtilities = require('./utilities/rotation'),
      approximateUtilities = require('./utilities/approximate');

const { VERTICES_LENGTH } = constants,
      { first, second, third, permute } = arrayUtilities,
      { calculateEdges, calculateNormal } = facetUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { rotateVertices, rotateVertexAboutZAxis } = rotationUtilities,
      { add3, subtract3, scale3, length3, normalise3 } = vectorUtilities;

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
  
  getMidPoint() {
    const midPoint = this.vertices.reduce(function(midPoint, vertex) {
      const scaledVertex = scale3(vertex, 1/3);
      
      midPoint = add3(midPoint, scaledVertex);
      
      return midPoint;
    }, [ 0, 0, 0 ]);
    
    return midPoint;
  }
  
  getVertexPositions() {
    const vertexPositions = this.vertices.map(function(vertex) {
      const vertexPosition = vertex.slice(); ///
      
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
  
  isTooSmall() {
    const normalLength = length3(this.normal),
          normalLengthApproximatelyEqualToZero = isApproximatelyEqualToZero(normalLength),
          tooSmall = normalLengthApproximatelyEqualToZero;  ///
    
    return tooSmall;
  }
  
  isMasked(maskingFacet) {
    const edgesInXYPlane = maskingFacet.getEdgesInXYPlane(),
          midPoint = this.getMidPoint(),
          midPointToOneSideOfEdgesInXYPlane = isMidPointToOneSideOfEdgesInXYPlane(midPoint, edgesInXYPlane),
          masked = midPointToOneSideOfEdgesInXYPlane;  ///
    
    return masked;
  }
  
  applyTransforms(transforms) {
    this.vertices = this.vertices.map(function(vertex) {
      transforms.forEach(function(transform) {
        vertex = transform(vertex);
      });

      return vertex;
    });

    this.normal = calculateNormal(this.vertices);

    this.edges = calculateEdges(this.vertices, Edge);
  }
  
  rotate(rotationQuaternion) {
    this.vertices = rotateVertices(this.vertices, rotationQuaternion);
    
    this.normal = calculateNormal(this.vertices);

    this.edges = calculateEdges(this.vertices, Edge);
  }

  rotateAboutZAxis(rotationAboutZAxisMatrix) {
    this.vertices = this.vertices.map(function(vertex) {
      vertex = rotateVertexAboutZAxis(vertex, rotationAboutZAxisMatrix);

      return vertex;
    });

    this.normal = calculateNormal(this.vertices);

    this.edges = calculateEdges(this.vertices, Edge);
  }
  
  split(intersections, smallerFacets) {
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
  
  permute(places) {
    this.vertices = permute(this.vertices, places);
  }

  splitWithTwoNonNullIntersections(intersections, smallerFacets, facet) {
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
          firstFacet = facet.fromVertices(firstVertices),
          secondFacet = facet.fromVertices(secondVertices),
          thirdFacet = facet.fromVertices(thirdVertices),
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

  splitWithOneNonNullIntersection(intersections, smallerFacets, facet) {
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
          parentVertices = this.vertices,
          firstFacet = facet.fromVertices(firstVertices),
          secondFacet = facet.fromVertices(secondVertices),
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

  calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane) {
    const edges = this.getEdges(),
          intersections = edges.map(function(edge) {
            const intersection = edge.calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane);
  
            return intersection;
          });

    return intersections;
  }
}

module.exports = Facet;

function calculateIntermediateVertex(startVertex, endVertex, intersection) {
  const direction = subtract3(endVertex, startVertex),
        offset = scale3(direction, intersection),
        intermediateVertex = add3(startVertex, offset);

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

function isMidPointToOneSideOfEdgesInXYPlane(midPoint, edgesInXYPlane) {
  const midPointToTheLeftOfEdgesInXYPlane = isMidPointToTheLeftOfEdgesInXYPlane(midPoint, edgesInXYPlane),
        midPointToTheRightOfEdgesInXYPlane = isMidPointToTheRightOfEdgesInXYPlane(midPoint, edgesInXYPlane),
        midPointToOneSideOfEdgesInXYPlane = midPointToTheLeftOfEdgesInXYPlane || midPointToTheRightOfEdgesInXYPlane; ///

  return midPointToOneSideOfEdgesInXYPlane;
}

function isMidPointToTheLeftOfEdgesInXYPlane(midPoint, edgesInXYPlane) {
  const midPointToTheLeftOfEdgesInXYPlane = edgesInXYPlane.reduce(function(midPointToTheLeftOfEdgesInXYPlane, edgeInXYPlane) {
    if (midPointToTheLeftOfEdgesInXYPlane) {
      const midPointToTheLeftOfEdgeInXYPlane = edgeInXYPlane.isMidPointToTheLeft(midPoint);

      midPointToTheLeftOfEdgesInXYPlane = midPointToTheLeftOfEdgeInXYPlane;
    }

    return midPointToTheLeftOfEdgesInXYPlane;
  }, true);

  return midPointToTheLeftOfEdgesInXYPlane;
}

function isMidPointToTheRightOfEdgesInXYPlane(midPoint, edgesInXYPlane) {
  const midPointToTheRightOfEdgesInXYPlane = edgesInXYPlane.reduce(function(midPointToTheRightOfEdgesInXYPlane, edgeInXYPlane) {
    if (midPointToTheRightOfEdgesInXYPlane) {
      const midPointToTheRightOfEdgeInXYPlane = edgeInXYPlane.isMidPointToTheRight(midPoint);

      midPointToTheRightOfEdgesInXYPlane = midPointToTheRightOfEdgeInXYPlane;
    }

    return midPointToTheRightOfEdgesInXYPlane;
  }, true);

  return midPointToTheRightOfEdgesInXYPlane;
}

