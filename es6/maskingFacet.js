'use strict';

const Facet = require('./facet'),
      LineInXYPlane = require('./lineInXYPlane'),
      VerticalLineInXYPlane = require('./verticalLineInXYPlane'),
      verticesUtilities = require('./utilities/vertices'),
      quaternionUtilities = require('./utilities/quaternion');

const { calculateNormal, rotateVertices } = verticesUtilities,
      { calculateRotationQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } = quaternionUtilities;

class MaskingFacet extends Facet {
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
  
  maskFacet(facet, maskedFacets) {
    const forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

    facet.rotate(forwardsRotationQuaternion);

    const facetsFromSplit = this.splitFacet(facet);

    this.maskFacetsFromSplit(facetsFromSplit, maskedFacets);

    maskedFacets.forEach(function(maskedFacet) {
      maskedFacet.rotate(backwardsRotationQuaternion);
    });
  }
  
  splitFacet(facet) {
    const linesInXYPlane = this.getLinesInXYPlane();

    let facets = [
      facet
    ];

    linesInXYPlane.forEach(function(lineInXYPlane) {
      const verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
            facetsFromSplit = verticalLineInXYPlane.splitFacets(facets);

      facets = facetsFromSplit; ///
    });

    const facetsFromSplit = facets; ///

    return facetsFromSplit;
  }

  maskFacetsFromSplit(facetsFromSplit, maskedFacets) {
    const linesInXYPlane = this.getLinesInXYPlane();

    facetsFromSplit.forEach(function(facetFromSplit) {
      const outsideLinesInXYPlane = facetFromSplit.isOutsideLinesInXYPlane(linesInXYPlane);
      
      if (outsideLinesInXYPlane) {
        const maskedFacet = facetFromSplit; ///
        
        maskedFacets.push(maskedFacet);
      }
    });
    
    return maskedFacets;
  }

  static fromFacet(facet) {
    let normal = facet.getNormal();
    
    const rotationQuaternion = calculateRotationQuaternion(normal);

    let vertices = facet.getVertices();
    
    vertices = rotateVertices(vertices, rotationQuaternion);
    
    normal = calculateNormal(vertices);
    
    const maskingFacet = new MaskingFacet(vertices, normal, rotationQuaternion);

    return maskingFacet;
  }
  
  static fromVertices(vertices) {
    const facet = Facet.fromVertices(vertices),
          maskingFacet = MaskingFacet.fromFacet(facet);
    
    return maskingFacet;
  }
}

module.exports = MaskingFacet;
