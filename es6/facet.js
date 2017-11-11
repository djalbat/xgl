'use strict';

const Line = require('./line'),
      vec3 = require('./maths/vec3'),
      arrayUtilities = require('./utilities/array'),
      verticesUtilities = require('./utilities/vertices');

const { add, subtract, scale, transform } = vec3,
      { first, second, third, permute } = arrayUtilities,
      { calculateNormal, rotateVertices } = verticesUtilities;

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

  isOutsideLinesInXYPlane(linesInXYPlane) {
    return true;
  }
  
  rotate(rotationQuaternion) {
    this.vertices = rotateVertices(this.vertices, rotationQuaternion);
    
    this.normal = calculateNormal(this.vertices);
  }

  rotateAboutZAxis(rotationAboutZAxisMatrix) {
    const mat2 = rotationAboutZAxisMatrix;  ///

    this.vertices = this.vertices.map(function(vertex) {
      let vec = vertex;

      vec = transform(vec, mat2);

      vertex = vec;

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
  const direction = subtract(endVertex, startVertex),
      offset = scale(direction, nonNullIntersection),
      intermediateVertex = add(startVertex, offset);

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
