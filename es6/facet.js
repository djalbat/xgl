'use strict';

const Line = require('./line'),
      arrayUtilities = require('./utilities/array'),
      vectorUtilities = require('./utilities/vector'),
      vertexUtilities = require('./utilities/vertex'),
      verticesUtilities = require('./utilities/vertices'),
      approximateUtilities = require('./utilities/approximate');

const { first, second, third, permute } = arrayUtilities,
      { rotateAboutZAxis } = vertexUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
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

  splitWithNullIntersection(intersections) {
    let facets;

    const nonNullIntersections = calculateNonNullIntersections(intersections),
          nonTrivialNonNullIntersections = calculateNonTrivialIntersections(nonNullIntersections),
          nonTrivialNonNullIntersectionsLength = nonTrivialNonNullIntersections.length;

    switch (nonTrivialNonNullIntersectionsLength) {
      case 2 :
        facets = this.splitWithTwoNonTrivialNonNullIntersections(intersections);
        break;

      default :
        facets = this.splitWithNoNonTrivialNonNullIntersections();
        break;
    }

    return facets;
  }

  splitWithoutNullIntersection(intersections) {
    let facets;

    const nonTrivialIntersections = calculateNonTrivialIntersections(intersections),
          nonTrivialIntersectionsLength = nonTrivialIntersections.length;

    switch(nonTrivialIntersectionsLength) {
      case 2 :
        facets = this.splitWithTwoNonTrivialIntersections(intersections);
        break;

      case 1 :
        facets = this.splitWithOneNonTrivialIntersection(intersections);
        break;

      default :
        facets = this.splitWithNoNonTrivialIntersections();
        break;
    }

    return facets;
  }

  splitWithTwoNonTrivialNonNullIntersections(intersections) {
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
          facets = [
            firstFacet,
            secondFacet,
            thirdFacet
          ];

    return facets;
  }

  splitWithNoNonTrivialNonNullIntersections() {
    const facet = this,  ///
        facets = [
          facet
        ];

    return facets;
  }

  splitWithTwoNonTrivialIntersections(intersections) {
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
          firstFacetInXYPlane = Facet.fromVertices(firstVertices),
          secondFacetInXYPlane = Facet.fromVertices(secondVertices),
          thirdFacetInXYPlane = Facet.fromVertices(thirdVertices),
          facets = [
            firstFacetInXYPlane,
            secondFacetInXYPlane,
            thirdFacetInXYPlane
          ];

    return facets;
  }

  splitWithOneNonTrivialIntersection(intersections) {
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
          firstFacetInXYPlane = Facet.fromVertices(firstVertices),
          secondFacetInXYPlane = Facet.fromVertices(secondVertices),
          facets = [
            firstFacetInXYPlane,
            secondFacetInXYPlane
          ];

    return facets;
  }

  splitWithNoNonTrivialIntersections() {
    const facet = this,  ///
          facets = [
            facet
          ];

    return facets;
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
