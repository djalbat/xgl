'use strict';

const Facet = require('./facet'),
      LineInXYPlane = require('./lineInXYPlane'),
      VerticalLineInXYPlane = require('./verticalLineInXYPlane'),
      verticesUtilities = require('./utilities/vertices'),
      quaternionUtilities = require('./utilities/quaternion');

const { calculateNormal, rotateVertices } = verticesUtilities,
      { calculateRotationQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } = quaternionUtilities;

class FacetInXYPlane extends Facet {
  constructor(vertices, normal, rotationQuaternion) {
    super(vertices, normal);
    
    this.rotationQuaternion = rotationQuaternion;
  }

  getRotationQuaternion() {
    return this.rotationQuaternion;
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
    const linesInXYPlane = this.getLinesInXYPlane(),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

    facet.rotate(forwardsRotationQuaternion);

    let facets = [
      facet
    ];

    facets = this.splitFacetsWithLinesInXYPlane(facets, linesInXYPlane);

    facets = this.keepFacetsOutsideLinesInXYPlane(facets, linesInXYPlane);

    facets.forEach(function(facet) {
      facet.rotate(backwardsRotationQuaternion);
    });

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

  keepFacetsOutsideLinesInXYPlane(facets, linesInXYPlane) {
    facets = facets.reduce(function(facets, facet, index) {
      const outsideLinesInXYPlane = facet.isOutsideLinesInXYPlane(linesInXYPlane);
      
      if (outsideLinesInXYPlane) {
        facets.push(facet);
      }
      
      return facets;
    }, []);
    
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
