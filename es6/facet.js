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
  
  isTooSmall() {
    const normalLength = length3(this.normal),
          normalLengthApproximatelyEqualToZero = isApproximatelyEqualToZero(normalLength),
          tooSmall = normalLengthApproximatelyEqualToZero;  ///
    
    return tooSmall;
  }
  
  isOutsideLinesInXYPlane(linesInXYPlane) {
    const insideLinesInXYPlane = this.isInsideLinesInXYPlane(linesInXYPlane),
          outsideLinesInXYPlane = !insideLinesInXYPlane;
    
    return outsideLinesInXYPlane;
  }
  
  isInsideLinesInXYPlane(linesInXYPlane) {
    const totalOfSidesOfLineInXYPlane = linesInXYPlane.reduce(function(totalOfSidesOfLineInXYPlane, lineInXYPlane) {
            const sideOfLineInXYPlane = this.calculateSideOfLineInXYPlane(lineInXYPlane);

            totalOfSidesOfLineInXYPlane += sideOfLineInXYPlane;

            return totalOfSidesOfLineInXYPlane;
          }.bind(this), 0),
          totalOfSidesOfLineInXYPlaneAbsoluteValue = Math.abs(totalOfSidesOfLineInXYPlane),
          insideLinesInXYPlane = (totalOfSidesOfLineInXYPlaneAbsoluteValue === 3);

    return insideLinesInXYPlane;
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
    const intersectionsIncludesNull = intersections.includes(null);

    intersectionsIncludesNull ?
      this.splitWithNullIntersection(intersections, smallerFacets) :
        this.splitWithoutNullIntersection(intersections, smallerFacets);
  }

  splitWithNullIntersection(intersections, smallerFacets) {
    const nonNullIntersections = calculateNonNullIntersections(intersections),
          nonTrivialNonNullIntersections = calculateNonTrivialIntersections(nonNullIntersections),
          nonTrivialNonNullIntersectionsLength = nonTrivialNonNullIntersections.length;

    switch (nonTrivialNonNullIntersectionsLength) {
      case 2 :
        this.splitWithTwoNonTrivialNonNullIntersections(intersections, smallerFacets);
        break;

      default :
        const smallerFacet = this;  ///

        smallerFacets.push(smallerFacet);
        break;
    }
  }

  splitWithoutNullIntersection(intersections, smallerFacets) {
    const nonTrivialIntersections = calculateNonTrivialIntersections(intersections),
          nonTrivialIntersectionsLength = nonTrivialIntersections.length;

    switch(nonTrivialIntersectionsLength) {
      case 2 :
        this.splitWithTwoNonTrivialIntersections(intersections, smallerFacets);
        break;

      case 1 :
        this.splitWithOneNonTrivialIntersection(intersections, smallerFacets);
        break;

      default :
        const smallerFacet = this;  ///

        smallerFacets.push(smallerFacet);
        break;
    }
  }

  splitWithTwoNonTrivialNonNullIntersections(intersections, smallerFacets) {
    const verticesLength = 3,
          nullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
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
            secondIntermediateVertex
          ],
          secondVertices = [
            secondVertex,
            firstIntermediateVertex,
            secondIntermediateVertex
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

  splitWithTwoNonTrivialIntersections(intersections, smallerFacets) {
    const verticesLength = 3,
          trivialIntersectionIndex = calculateTrivialIntersectionIndex(intersections),
          places = (verticesLength - trivialIntersectionIndex) % verticesLength;

    intersections = permute(intersections, places);

    this.vertices = permute(this.vertices, places);

    const firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          nonTrivialIntersections = intersections.slice(1),
          firstNonTrivialIntersection = first(nonTrivialIntersections),
          secondNonTrivialIntersection = second(nonTrivialIntersections),
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstNonTrivialIntersection),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondNonTrivialIntersection),
          firstVertices = [
            firstVertex,
            secondVertex,
            firstIntermediateVertex
          ],
          secondVertices = [
            firstVertex,
            firstIntermediateVertex,
            secondIntermediateVertex
          ],
          thirdVertices = [
            firstIntermediateVertex,
            thirdVertex,
            secondIntermediateVertex
          ],
          firstFacet= Facet.fromVertices(firstVertices),
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

  splitWithOneNonTrivialIntersection(intersections, smallerFacets) {
    const verticesLength = 3,
          nonTrivialIntersectionIndex = calculateNonTrivialIntersectionIndex(intersections),
          places = (verticesLength - nonTrivialIntersectionIndex) % verticesLength;

    intersections = permute(intersections, places);

    this.vertices = permute(this.vertices, places);

    const firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          firstIntersection = first(intersections),
          nonTrivialIntersection = firstIntersection, ///
          intermediateVertex = calculateIntermediateVertex(firstVertex, secondVertex, nonTrivialIntersection),
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

  calculateSideOfLineInXYPlane(lineInXYPlane) {
    const sideOfLineInXYPlane = this.vertices.reduce(function(sideOfLineInXYPlane, vertex) {
      if (sideOfLineInXYPlane === 0) {
        const vertexSide = lineInXYPlane.calculateVertexSide(vertex);

        sideOfLineInXYPlane = vertexSide; ///
      }

      return sideOfLineInXYPlane;
    }, 0);

    return sideOfLineInXYPlane;
  }

  static fromVertices(vertices) {
    const normal = calculateNormal(vertices),
          facet = new Facet(vertices, normal);

    return facet;
  }
}

module.exports = Facet;

function isIntersectionTrivial(intersection) {
  const intersectionNonTrivial = isIntersectionNonTrivial(intersection),
      intersectionTrivial = !intersectionNonTrivial;

  return intersectionTrivial;
}

function isIntersectionNonTrivial(intersection) {
  const intersectionNonTrivial = ((intersection > 0) && (intersection < 1));

  return intersectionNonTrivial;
}

function calculateIntermediateVertex(startVertex, endVertex, nonNullIntersection) {
  const direction = subtract3(endVertex, startVertex),
        offset = scale3(direction, nonNullIntersection),
        intermediateVertex = add3(startVertex, offset);

  return intermediateVertex;
}

function calculateNonNullIntersections(intersections) {
  const nonNullIntersections = intersections.reduce(function(nonNullIntersections, intersection) {
    const intersectionNonNull = (intersection !== null);

    if (intersectionNonNull) {
      const nonNullIntersection = intersection; ///

      nonNullIntersections.push(nonNullIntersection);
    }

    return nonNullIntersections;
  }, []);

  return nonNullIntersections;
}

function calculateNonTrivialIntersections(intersections) {
  const nonTrivialIntersections = intersections.reduce(function(nonTrivialIntersections, intersection) {
    const intersectionNonTrivial = isIntersectionNonTrivial(intersection);

    if (intersectionNonTrivial) {
      const nonTrivialIntersection = intersection;  ///

      nonTrivialIntersections.push(nonTrivialIntersection);
    }

    return nonTrivialIntersections;
  }, []);

  return nonTrivialIntersections;
}

function calculateNonNullIntersectionIndex(intersections) {
  const nullIntersectionIndex = intersections.indexOf(null);

  return nullIntersectionIndex;
}

function calculateTrivialIntersectionIndex(intersections) {
  const trivialIntersectionIndex = intersections.reduce(function(trivialIntersectionIndex, intersection, index) {
    if (trivialIntersectionIndex === null) {
      const intersectionNonTrivial = isIntersectionTrivial(intersection);

      if (intersectionNonTrivial) {
        trivialIntersectionIndex = index;
      }
    }

    return trivialIntersectionIndex;
  }, null);

  return trivialIntersectionIndex;
}

function calculateNonTrivialIntersectionIndex(intersections) {
  const nonTrivialIntersectionIndex = intersections.reduce(function(nonTrivialIntersectionIndex, intersection, index) {
    if (nonTrivialIntersectionIndex === null) {
      const intersectionNonTrivial = isIntersectionNonTrivial(intersection);

      if (intersectionNonTrivial) {
        nonTrivialIntersectionIndex = index;
      }
    }

    return nonTrivialIntersectionIndex;
  }, null);

  return nonTrivialIntersectionIndex;
}
