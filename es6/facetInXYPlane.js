'use strict';

const Facet = require('./facet'),
      LineInXYPlane = require('./lineInXYPlane'),
      VerticalLineInXYPlane = require('./verticalLineInXYPlane'),
      verticesUtilities = require('./utilities/vertices'),
      quaternionUtilities = require('./utilities/quaternion');

const { calculateRotationQuaternion } = quaternionUtilities,
      { calculateNormal, rotateVertices } = verticesUtilities;

class FacetInXYPlane extends Facet {
  constructor(vertices, normal, rotationQuaternion) {
    super(vertices, normal);
    
    this.rotationQuaternion = rotationQuaternion;
  }

  getRotationQuaternion() {
    return this.rotationQuaternion;
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

  getLinesInXYPlane() {
    const verticesLength = 3, ///
          linesInXYPlane = this.vertices.map(function(vertex, index) {
            const startIndex = index,
                  endIndex = (startIndex + 1) % verticesLength,
                  startVertex = this.vertices[startIndex],
                  endVertex = this.vertices[endIndex],
                  lineInXYPlane = LineInXYPlane.fromVertices(startVertex, endVertex);
                  
            return lineInXYPlane;
          }.bind(this));

    return linesInXYPlane;
  }
  
  maskFacet(facet) {
    let facets = [
      facet
    ];
    
    const linesInXYPlane = this.getLinesInXYPlane();
    
    facets = this.splitFacetsWithLinesInXYPlane(facets, linesInXYPlane);
    
    return facets;
  }
  
  splitFacetsWithLinesInXYPlane(facets, linesInXYPlane) {
    facets = linesInXYPlane.reduce(function(facets, lineInXYPlane) {
      const verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane);

      facets = verticalLineInXYPlane.splitFacets(facets);

      return facets;
    }, facets);
    
    return facets;
  }

  static fromFacet(facet) {
    let normal = facet.getNormal();
    
    const rotationQuaternion = calculateRotationQuaternion(normal);

    let vertices = facet.getVertices();
    
    vertices = rotateVertices(vertices, rotationQuaternion);
    
    normal = calculateNormal(vertices);
    
    const facetInXYPlane = new FacetInXYPlane(vertices, normal, rotationQuaternion);

    return facetInXYPlane;
  }
}

module.exports = FacetInXYPlane;
