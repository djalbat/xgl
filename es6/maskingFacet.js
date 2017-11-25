'use strict';

const Facet = require('./facet'),
      LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array'),
      verticesUtilities = require('./utilities/vertices'),
      rotationUtilities = require('./utilities/rotation'),
      VerticalLineInXYPlane = require('./verticalLineInXYPlane');

const { separate, concatenate } = arrayUtilities,
      { calculateNormal, rotateVertices } = verticesUtilities,
      { calculateRotationQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } = rotationUtilities;

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

  maskFacet(facet, unmaskedFacets) {
    const unmaskedFacet = facet.clone(),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

    facet.rotate(forwardsRotationQuaternion);

    const smallerFacets = this.splitFacet(facet),
          maskedSmallerFacets = [],
          unmaskedSmallerFacets = [];

    this.separateSmallerFacets(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets);

    const maskedSmallerFacetsLength = maskedSmallerFacets.length;

    if (maskedSmallerFacetsLength === 0) {
      concatenate(unmaskedFacets, unmaskedFacet);
    } else {
      unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
        unmaskedSmallerFacet.rotate(backwardsRotationQuaternion);
      });

      concatenate(unmaskedFacets, unmaskedSmallerFacets);
    }
  }
  
  splitFacet(facet) {
    const linesInXYPlane = this.getLinesInXYPlane();

    let facets = [
          facet
        ],
        smallerFacets = facets; ///

    linesInXYPlane.forEach(function(lineInXYPlane) {
      const verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane);

      smallerFacets = verticalLineInXYPlane.splitFacets(facets);

      facets = smallerFacets; ///
    });

    return smallerFacets;
  }

  separateSmallerFacets(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets) {
    const linesInXYPlane = this.getLinesInXYPlane();

    separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
      const smallerFacetInsideLinesInXYPlane = smallerFacet.isInsideLinesInXYPlane(linesInXYPlane),
            smallerFacetMasked = smallerFacetInsideLinesInXYPlane; ///

      return smallerFacetMasked;
    });
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
