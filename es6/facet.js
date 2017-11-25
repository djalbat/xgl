'use strict';

const Line = require('./line'),
      arrayUtilities = require('./utilities/array'),
      vectorUtilities = require('./utilities/vector'),
      vertexUtilities = require('./utilities/vertex'),
      verticesUtilities = require('./utilities/vertices'),
      approximateUtilities = require('./utilities/approximate');

const { rotateAboutZAxis } = vertexUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { first, second, third, permute } = arrayUtilities,
      { calculateNormal, rotateVertices } = verticesUtilities,
      { add3, subtract3, scale3, length3 } = vectorUtilities;

class Facet {
  constructor(vertices, normal) {
    this.vertices = vertices;
    this.normal = normal;
  }

  clone() {
    const vertices = this.vertices.map(function(vertex) {
            return vertex.slice();
          }),
          normal = this.normal.slice(),
          facet = new Facet(vertices, normal);

    return facet;
  }

  getVertices() {
    return this.vertices;
  }

  getNormal() {
    return this.normal;
  }

  getLines() {
    const verticesLength = 3, ///
          lines = this.vertices.map(function(vertex, index) {
            const startIndex = index,
                  endIndex = (startIndex + 1) % verticesLength,
                  startVertex = this.vertices[startIndex],
                  endVertex = this.vertices[endIndex],
                  line = Line.fromVertices(startVertex, endVertex);
  
            return line;
          }.bind(this));

    return lines;
  }
  
  getMidPoint() {
    const midPoint = this.vertices.reduce(function(midPoint, vertex) {
      const scaledVertex = scale3(vertex, 1/3);
      
      midPoint = add3(midPoint, scaledVertex);
      
      return midPoint;
    }, [ 0, 0, 0 ]);
    
    return midPoint;
  }
  
  isTooSmall() {
    const normalLength = length3(this.normal),
          normalLengthApproximatelyEqualToZero = isApproximatelyEqualToZero(normalLength),
          tooSmall = normalLengthApproximatelyEqualToZero;  ///
    
    return tooSmall;
  }
  
  isInsideLinesInXYPlane(linesInXYPlane) {
    const midPoint = this.getMidPoint(),
          midPointToOneSideOfLinesInXYPlane = isMidPointToOneSideOfLinesInXYPlane(midPoint, linesInXYPlane),
          insideLinesInXYPlane = midPointToOneSideOfLinesInXYPlane;  ///

    return insideLinesInXYPlane;
  }
  
  applyTransforms(transforms) {
    this.vertices = this.vertices.map(function(vertex) {
      transforms.forEach(function(transform) {
        vertex = transform(vertex);
      });

      return vertex;
    });

    this.normal = calculateNormal(this.vertices);
  }
  
  rotate(rotationQuaternion) {
    this.vertices = rotateVertices(this.vertices, rotationQuaternion);
    
    this.normal = calculateNormal(this.vertices);
  }

  rotateAboutZAxis(rotationAboutZAxisMatrix) {
    this.vertices = this.vertices.map(function(vertex) {
      vertex = rotateAboutZAxis(vertex, rotationAboutZAxisMatrix);

      return vertex;
    });

    this.normal = calculateNormal(this.vertices);
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

      default :
        const smallerFacet = this;  ///

        smallerFacets.push(smallerFacet);
        break;
    }
  }

  splitWithTwoNonNullIntersections(intersections, smallerFacets) {
    const verticesLength = 3,
          nullIntersectionIndex = calculateNullIntersectionIndex(intersections),
          places = (verticesLength - nullIntersectionIndex) % verticesLength;

    intersections = permute(intersections, places);

    this.vertices = permute(this.vertices, places);

    const firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          nonNullIntersections = intersections.slice(1),
          firstNonNullIntersection = first(nonNullIntersections),
          secondNonNullIntersection = second(nonNullIntersections),
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstNonNullIntersection),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondNonNullIntersection),
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
          firstFacet = Facet.fromVertices(firstVertices),
          secondFacet = Facet.fromVertices(secondVertices),
          thirdFacet = Facet.fromVertices(thirdVertices),
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
    const verticesLength = 3,
          nonNullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (verticesLength - nonNullIntersectionIndex) % verticesLength;

    intersections = permute(intersections, places);

    this.vertices = permute(this.vertices, places);

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
          firstFacet = Facet.fromVertices(firstVertices),
          secondFacet = Facet.fromVertices(secondVertices),
          firstFacetTooSmall = firstFacet.isTooSmall(),
          secondFacetTooSmall = secondFacet.isTooSmall();

    if (!firstFacetTooSmall) {
      smallerFacets.push(firstFacet);
    }

    if (!secondFacetTooSmall) {
      smallerFacets.push(secondFacet);
    }
  }

  calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane) {
    const lines = this.getLines(),
          intersections = lines.map(function(line) {
            const intersection = line.calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane);
  
            return intersection;
          });

    return intersections;
  }

  static fromVertices(vertices) {
    const normal = calculateNormal(vertices),
          facet = new Facet(vertices, normal);

    return facet;
  }

  static fromVerticesAndIndexes(vertices, indexes) {
    vertices = indexes.map(function(index) {
      const vertex = vertices[index];

      return vertex;
    });

    const facet = Facet.fromVertices(vertices);

    return facet;
  }
}

module.exports = Facet;

function calculateIntermediateVertex(startVertex, endVertex, nonNullIntersection) {
  const direction = subtract3(endVertex, startVertex),
        offset = scale3(direction, nonNullIntersection),
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

function isMidPointToOneSideOfLinesInXYPlane(midPoint, linesInXYPlane) {
  const midPointToTheLeftOfLinesInXYPlane = isMidPointToTheLeftOfLinesInXYPlane(midPoint, linesInXYPlane),
        midPointToTheRightOfLinesInXYPlane = isMidPointToTheRightOfLinesInXYPlane(midPoint, linesInXYPlane),
        midPointToOneSideOfLinesInXYPlane = midPointToTheLeftOfLinesInXYPlane || midPointToTheRightOfLinesInXYPlane; ///

  return midPointToOneSideOfLinesInXYPlane;
}

function isMidPointToTheLeftOfLinesInXYPlane(midPoint, linesInXYPlane) {
  const midPointToTheLeftOfLinesInXYPlane = linesInXYPlane.reduce(function(midPointToTheLeftOfLinesInXYPlane, lineInXYPlane) {
    if (midPointToTheLeftOfLinesInXYPlane) {
      const midPointToTheLeftOfLineInXYPlane = lineInXYPlane.isMidPointToTheLeft(midPoint);

      midPointToTheLeftOfLinesInXYPlane = midPointToTheLeftOfLineInXYPlane;
    }

    return midPointToTheLeftOfLinesInXYPlane;
  }, true);

  return midPointToTheLeftOfLinesInXYPlane;
}

function isMidPointToTheRightOfLinesInXYPlane(midPoint, linesInXYPlane) {
  const midPointToTheRightOfLinesInXYPlane = linesInXYPlane.reduce(function(midPointToTheRightOfLinesInXYPlane, lineInXYPlane) {
    if (midPointToTheRightOfLinesInXYPlane) {
      const midPointToTheRightOfLineInXYPlane = lineInXYPlane.isMidPointToTheRight(midPoint);

      midPointToTheRightOfLinesInXYPlane = midPointToTheRightOfLineInXYPlane;
    }

    return midPointToTheRightOfLinesInXYPlane;
  }, true);

  return midPointToTheRightOfLinesInXYPlane;
}
