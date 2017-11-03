'use strict';

const vec3 = require('./maths/vec3'),
      LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array'),
      verticesUtilities = require('./utilities/vertices');

const { dot } = vec3,
      { first, second } = arrayUtilities,
      { calculateNormal, rotateVertices, translateVertices } = verticesUtilities;

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

  getLineInXYPlane() {
    const normalComponents = this.normal, ///
          firstVertex = first(this.vertices),
          firstNormalComponent = first(normalComponents),
          secondNormalComponent = second(normalComponents),
          a = firstNormalComponent,  ///
          b = secondNormalComponent, ///
          c = -dot(firstVertex, this.normal), ///
          lineInXYPlane = LineInXYPlane.fromEquation(a, b, c);

    return lineInXYPlane;
  }
  
  setVertices(vertices) {
    this.vertices = vertices;
  }
  
  setNormal(normal) {
    this.normal = normal;
  }
  
  rotate(rotationQuaternion) {
    this.vertices = rotateVertices(this.vertices, rotationQuaternion);
    
    this.normal = calculateNormal(this.vertices);
  }
  
  translate(translation) {
    this.vertices = translateVertices(this.vertices, translation);
  }

  static fromVertices(vertices) {
    const normal = calculateNormal(vertices),
          facet = new Facet(vertices, normal);

    return facet;
  }

  static fromFacetInXYPlane(facetInXYPlane) {
    const vertices = facetInXYPlane.getVertices(),
          normal = facetInXYPlane.getNormal(),
          facet = new Facet(vertices, normal);

    return facet;
  }
}

module.exports = Facet;
