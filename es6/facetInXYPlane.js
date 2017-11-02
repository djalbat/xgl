'use strict';

const Facet = require('./facet'),
      vec2 = require('./maths/vec2'),
      LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array'),
      verticesUtilities = require('./utilities/vertices'),
      quaternionUtilities = require('./utilities/quaternion');

const { transform } = vec2,
      { first, third } = arrayUtilities,
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

  getEdgeLinesInXYPlane() {
    const edgeLinesInXYPlane = [],
          verticesLength = this.vertices.length;

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

  split(verticalLineInXYPlane) {
    const intersections = this.calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane),
          intersectionsIncludesNull = intersections.includes(null),
          facetsInXYPlane = intersectionsIncludesNull ?
                              this.splitWithNullIntersection(intersections) :
                                this.splitWithoutNullIntersection(intersections);

    return facetsInXYPlane;
  }

  splitWithNullIntersection(intersections) {
    debugger
  }

  splitWithoutNullIntersection(intersections) {

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
