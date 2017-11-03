'use strict';

const Facet = require('./facet'),
      vec3 = require('./maths/vec3'),
      LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array'),
      verticesUtilities = require('./utilities/vertices'),
      quaternionUtilities = require('./utilities/quaternion');

const { add, subtract, scale, transform } = vec3,
      { first, second, third, permute } = arrayUtilities,
      { calculateRotationQuaternion } = quaternionUtilities,
      { calculateNormal, rotateVertices, translateVertices } = verticesUtilities;

class FacetInXYPlane extends Facet {
  constructor(vertices, normal, rotationQuaternion, translation) {
    super(vertices, normal);
    
    this.rotationQuaternion = rotationQuaternion;

    this.translation = translation;
  }

  getRotationQuaternion() {
    return this.rotationQuaternion;
  }

  getTranslation() {
    return this.translation;
  }

  getForwardsRotationQuaternion() {
    const forwardsRotationQuaternion = this.rotationQuaternion;

    return forwardsRotationQuaternion;
  }
  
  getBackwardsRotationQuaternion() {
    const rotationQuaternionComponents = this.rotationQuaternion, ///
          backwardsRotationQuaternionComponents = rotationQuaternionComponents.map(function(rotationQuaternionComponent, index) {
            const backwardsRotationQuaternionComponent = (index < 1) ?  ///
                                                           +rotationQuaternionComponent :
                                                             -rotationQuaternionComponent;
            
            return backwardsRotationQuaternionComponent;
          }),
          backwardsRotationQuaternion = backwardsRotationQuaternionComponents;
              
    return backwardsRotationQuaternion;
  }

  getForwardsTranslation() {
    const forwardsTranslation = this.translation;

    return forwardsTranslation;
  }

  getBackwardsTranslation() {
    const translationComponents = this.translation, ///
          backwardsTranslationComponents = translationComponents.map(function(translationComponent, index) {
            const backwardsTranslationComponent = (index < 2) ? ///
                                                    +translationComponent :
                                                      -translationComponent;

            return backwardsTranslationComponent;
          }),
          backwardsTranslation = backwardsTranslationComponents;
    
    return backwardsTranslation;
  }

  getEdgeLinesInXYPlane() {
    const edgeLinesInXYPlane = [],
          verticesLength = 3; ///

    for (let index = 0; index < verticesLength; index++) {
      const startIndex = index,
            endIndex = (index + 1) % verticesLength,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            edgeLineInXYPlane = LineInXYPlane.fromVertices(startVertex, endVertex);

      edgeLinesInXYPlane.push(edgeLineInXYPlane);
    }

    return edgeLinesInXYPlane;
  }

  rotate(rotationMatrix) {
    const mat2 = rotationMatrix;  ///

    this.vertices = this.vertices.map(function(vertex) {
      let vec = vertex;

      vec = transform(vec, mat2);

      vertex = vec;

      return vertex;
    });
  }

  possiblySplit(verticalLineInXYPlane) {
    const intersections = this.calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane),
          intersectionsIncludesNull = intersections.includes(null),
          facetsInXYPlane = intersectionsIncludesNull ?
                              this.possiblySplitWithNullIntersection(intersections) :
                                this.possiblySplitWithoutNullIntersection(intersections);

    return facetsInXYPlane;
  }

  possiblySplitWithNullIntersection(intersections) {
    const nonNullIntersections = calculateNonNullIntersections(intersections),
          firstNonNullIntersection = first(nonNullIntersections),
          firstNonNullIntersectionNonTrivial = isIntersectionNonTrivial(firstNonNullIntersection),
          facetsInXYPlane = firstNonNullIntersectionNonTrivial ?
                              this.splitWithNullIntersection(intersections) :
                                this.doNotSplit();

    return facetsInXYPlane;
  }

  doNotSplit() {
    const facetInXYPlane = this,  ///
          facetsInXYPlane = [
            facetInXYPlane
          ];

    return facetsInXYPlane;
  }

  splitWithNullIntersection(intersections) {
    const verticesLength = 3,
          nullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (verticesLength - nullIntersectionIndex) % verticesLength;

    let vertices = this.getVertices();

    intersections = permute(intersections, places);

    vertices = permute(vertices, places);

    const firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
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
          normal = this.getNormal(),
          firstFacetInXYPlane = new FacetInXYPlane(firstVertices, normal, this.rotationQuaternion, this.translation),
          secondFacetInXYPlane = new FacetInXYPlane(secondVertices, normal, this.rotationQuaternion, this.translation),
          thirdFacetInXYPlane = new FacetInXYPlane(thirdVertices, normal, this.rotationQuaternion, this.translation),
          facetsInXYPlane = [
            firstFacetInXYPlane,
            secondFacetInXYPlane,
            thirdFacetInXYPlane
          ];

    return facetsInXYPlane;
  }

  possiblySplitWithoutNullIntersection(intersections) {
    const nonTrivialIntersections = calculateNonTrivialIntersections(intersections),
          nonTrivialIntersectionsLength = nonTrivialIntersections.length,
          oneNonTrivialIntersection = (nonTrivialIntersectionsLength === 1),
          facetsInXYPlane = oneNonTrivialIntersection ?
                              this.splitWithOneNonTrivialIntersection(intersections) :
                                this.splitWithTwoNonTrivialIntersection(intersections);

    return facetsInXYPlane;
  }

  splitWithOneNonTrivialIntersection(intersections) {
    const verticesLength = 3,
          nonTrivialIntersectionIndex = calculateNonTrivialIntersectionIndex(intersections),
          places = (verticesLength - nonTrivialIntersectionIndex) % verticesLength;

    let vertices = this.getVertices();

    intersections = permute(intersections, places);

    vertices = permute(vertices, places);

    const firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
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
          normal = this.getNormal(),
          firstFacetInXYPlane = new FacetInXYPlane(firstVertices, normal, this.rotationQuaternion, this.translation),
          secondFacetInXYPlane = new FacetInXYPlane(secondVertices, normal, this.rotationQuaternion, this.translation),
          facetsInXYPlane = [
            firstFacetInXYPlane,
            secondFacetInXYPlane
          ];

    return facetsInXYPlane;
  }

  splitWithTwoNonTrivialIntersection(intersections) {
    const verticesLength = 3,
          trivialIntersectionIndex = calculateTrivialIntersectionIndex(intersections),
          places = (verticesLength - trivialIntersectionIndex) % verticesLength;

    let vertices = this.getVertices();

    intersections = permute(intersections, places);

    vertices = permute(vertices, places);

    const firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
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
          normal = this.getNormal(),
          firstFacetInXYPlane = new FacetInXYPlane(firstVertices, normal, this.rotationQuaternion, this.translation),
          secondFacetInXYPlane = new FacetInXYPlane(secondVertices, normal, this.rotationQuaternion, this.translation),
          thirdFacetInXYPlane = new FacetInXYPlane(thirdVertices, normal, this.rotationQuaternion, this.translation),
          facetsInXYPlane = [
            firstFacetInXYPlane,
            secondFacetInXYPlane,
            thirdFacetInXYPlane
          ];

    return facetsInXYPlane;
  }

  calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane) {
    const edgeLinesInXYPlane = this.getEdgeLinesInXYPlane(),
          intersections = edgeLinesInXYPlane.map(function(edgeLineInXYPlane) {
            const intersection = edgeLineInXYPlane.calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane);

            return intersection;
          });

    return intersections;
  }

  static fromFacet(facet) {
    let normal = facet.getNormal();
    
    const rotationQuaternion = calculateRotationQuaternion(normal);

    let vertices = facet.getVertices();
    
    vertices = rotateVertices(vertices, rotationQuaternion);
    
    const translation = calculateTranslation(vertices);
    
    vertices = translateVertices(vertices, translation);
        
    normal = calculateNormal(vertices);
    
    const facetInXYPlane = new FacetInXYPlane(vertices, normal, rotationQuaternion, translation);

    return facetInXYPlane;
  }
}

module.exports = FacetInXYPlane;

function calculateTranslation(vertices) {
  const firstVertex = first(vertices),
        vertex = firstVertex, ///
        vertexComponents = vertex,  ///
        thirdVertexComponent = third(vertexComponents),
        z = thirdVertexComponent, ///
        translation = [0, 0, -z];

  return translation;
}

function calculateIntermediateVertex(startVertex, endVertex, nonNullIntersection) {
  const direction = subtract(endVertex, startVertex),
        offset = scale(direction, nonNullIntersection),
        intermediateVertex = add(startVertex, offset);

  return intermediateVertex;
}

function isIntersectionTrivial(intersection) {
  const intersectionNonTrivial = isIntersectionNonTrivial(intersection),
        intersectionTrivial = !intersectionNonTrivial;

  return intersectionTrivial;
}

function isIntersectionNonTrivial(intersection) {
  const intersectionNonTrivial = ((intersection > 0) && (intersection < 1));

  return intersectionNonTrivial;
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
