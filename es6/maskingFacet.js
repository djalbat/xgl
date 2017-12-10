'use strict';

const constants = require('./constants'),
      EdgeInXYPlane = require('./edgeInXYPlane'),
      VerticalLineInXYPlane = require('./verticalLineInXYPlane'),
      arrayUtilities = require('./utilities/array'),
      rotationUtilities = require('./utilities/rotation'),
      quaternionUtilities = require('./utilities/quaternion');

const { VERTICES_LENGTH } = constants,
      { push, separate } = arrayUtilities,
      { rotateVertices } = rotationUtilities,
      { calculateRotationQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } = quaternionUtilities;

class MaskingFacet {
  constructor(edgesInXYPlane, verticalLinesInXYPlane, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    this.edgesInXYPlane = edgesInXYPlane;
    this.verticalLinesInXYPlane = verticalLinesInXYPlane;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  getEdgesInXYPlane() {
    return this.edgesInXYPlane;
  }

  getVerticalLinesInXYPlane() {
    return this.verticalLinesInXYPlane;
  }

  getForwardsRotationQuaternion() {
    return this.forwardsRotationQuaternion;
  }

  getBackwardsRotationQuaternion() {
    return this.backwardsRotationQuaternion;
  }

  maskFacet(facet, unmaskedFacets) {
    const unmaskedFacet = facet.clone();

    facet.rotate(this.forwardsRotationQuaternion);

    const maskingFacet = this,  ///
          smallerFacets = this.splitFacet(facet),
          maskedSmallerFacets = [],
          unmaskedSmallerFacets = [];

    separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
      const smallerFacetMasked = smallerFacet.isMasked(maskingFacet);

      return smallerFacetMasked;
    });

    const maskedSmallerFacetsLength = maskedSmallerFacets.length;

    if (maskedSmallerFacetsLength === 0) {
      unmaskedFacets.push(unmaskedFacet);
    } else {
      unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
        unmaskedSmallerFacet.rotate(this.backwardsRotationQuaternion);
      }.bind(this));

      push(unmaskedFacets, unmaskedSmallerFacets);
    }
  }
  
  splitFacet(facet) {
    let facets = [
          facet
        ],
        smallerFacets = facets; ///

    this.verticalLinesInXYPlane.forEach(function(verticalLineInXYPlane) {
      smallerFacets = verticalLineInXYPlane.splitFacets(facets);

      facets = smallerFacets; ///
    });

    return smallerFacets;
  }

  static fromFacet(facet) {
    const facetNormal = facet.getNormal(),
          facetVertices = facet.getVertices(),
          rotationQuaternion = calculateRotationQuaternion(facetNormal),
          verticesInXYPlane = rotateVertices(facetVertices, rotationQuaternion),
          edgesInXYPlane = calculateEdgesInXYPlane(verticesInXYPlane),
          verticalLinesInXYPlane = edgesInXYPlane.map(function(edgeInXYPlane) {
            const verticalLineInXYPlane = VerticalLineInXYPlane.fromEdgeInXYPlane(edgeInXYPlane);
            
            return verticalLineInXYPlane;
          }),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(rotationQuaternion),
          maskingFacet = new MaskingFacet(edgesInXYPlane, verticalLinesInXYPlane, forwardsRotationQuaternion, backwardsRotationQuaternion);

    return maskingFacet;
  }
}

module.exports = MaskingFacet;

function calculateEdgesInXYPlane(verticesInXYPlane) {
  const edgesInXYPlane = verticesInXYPlane.map(function(vertex, index) {
          const startIndex = index,
                endIndex = (startIndex + 1) % VERTICES_LENGTH,
                startVertexInXYPlane = verticesInXYPlane[startIndex],
                endVertexInXYPlane = verticesInXYPlane[endIndex],
                edgeInXYPlane = EdgeInXYPlane.fromStartVertexInXYPlaneAndEndVertexInXYPlane(startVertexInXYPlane, endVertexInXYPlane);

          return edgeInXYPlane;
        }.bind(this));

  return edgesInXYPlane;
}
